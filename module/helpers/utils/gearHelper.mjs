const MAIN_HAND = 'mainHand';
const OFF_HAND = 'offHand';
const ARMOR = 'armor';
const ACCESSORY = 'accessory';


export function recoverAccuracyWeapon(weapon){
   return `${weapon.attr.firstAttr} + ${weapon.attr.firstAttr} ${weapon.atkBonus}`;
}

export function isEquiped(gearId, actorGearId){
   return gearId === actorGearId;
}

export async function equipGear(gear, gearSlot, actor){
   const actorGears = actor.system.gears;
   const equipmentUpdateFunctionMap = {
      [MAIN_HAND]: () => _equipMainHand(gear, actorGears),
      [OFF_HAND]: () => _equipOffHand(gear, actorGears, actor),
      [ARMOR]: () => _equipArmor(gear, actorGears),
      [ACCESSORY]: () => _equipAccessory(gear, actorGears)
   };

   const updateFunction = equipmentUpdateFunctionMap[gearSlot];
   return updateFunction? updateFunction() : "";
}

function _equipMainHand(gear, actorGears) {
   let updateData = {};
   const gearId = gear._id;
   const gearGrip = gear.system.qualifications.weaponGrip;
   const gearQuality = gear.quality;
   const gearType = gear.type;

   if (gearId === actorGears.mainHand.gearId) {
      updateData["system.gears.mainHand.gearId"] = "";
      updateData["system.gears.mainHand.gearQuality"] = "";
      updateData["system.gears.mainHand.gearType"] = "";
   } else {
      _updateMainHandData(updateData, gearId, gearQuality, gearType, gearGrip);
   }

   return updateData;
}

function _equipOffHand(gear, actorGears, actor) {
   let updateData = {};
   const gearId = gear._id;
   const gearQuality = gear.quality;
   const mainHandGrip = _recoverGearGrip(actorGears.mainHand.gearId, actor);
   const gearType = gear.type;

   if (gearId === actorGears.offHand.gearId) {
      updateData["system.gears.offHand.gearId"] = "";
      updateData["system.gears.offHand.gearQuality"] = "";
      updateData["system.gears.offHand.gearType"] = "";
   } else {
      _updateOffHandData(updateData, gearId, gearQuality, gearType, mainHandGrip);
   }

   return updateData;
}

function _equipArmor(armor, actorGears){
   return false;
}

function _equipAccessory(accessory, actorGears){
   return false;
}

function _updateMainHandData(updateData, gearId, gearQuality, gearType, gearGrip) {
   updateData["system.gears.mainHand.gearId"] = gearId;
   updateData["system.gears.mainHand.gearQuality"] = gearQuality;
   updateData["system.gears.mainHand.gearType"] = gearType;

   if (_isTwoHandsGrip(gearGrip)) {
      updateData["system.gears.offHand.gearId"] = "";
      updateData["system.gears.offHand.gearQuality"] = "";
      updateData["system.gears.offHand.gearType"] = "";
   }
}

function _updateOffHandData(updateData, gearId, gearQuality, gearType, mainHandGrip) {
   updateData["system.gears.offHand.gearId"] = gearId;
   updateData["system.gears.offHand.gearQuality"] = gearQuality;
   updateData["system.gears.offHand.gearType"] = gearType;

   if (_isTwoHandsGrip(mainHandGrip)) {
      updateData["system.gears.mainHand.gearId"] = "";
      updateData["system.gears.mainHand.gearQuality"] = "";
      updateData["system.gears.mainHand.gearType"] = "";
   }
}

function _isTwoHandsGrip(gearGrip) {
   return gearGrip === CONFIG.FABULA_ULTIMA.enums.weaponGrip.TWO_HAND;
}

function _recoverGearGrip(gearId, actor){
   const gear = actor.items.get(gearId);
   return gear?.system.qualifications.weaponGrip || "";
};