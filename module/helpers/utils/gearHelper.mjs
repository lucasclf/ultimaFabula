const MAIN_HAND = 'mainHand';
const OFF_HAND = 'offHand';
const ARMOR = 'armor';
const ACCESSORY = 'accessory';
const NO_QUALITY = 'no_quality';
const DEFENSE = 'defense';
const MAGIC_DEFENSE = 'magicDefense'


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

export function recoverDefense(defenseGear, defenseType){
   const bonus = defenseGear.bonus[defenseType];
   let attr = defenseGear?.attr;
   
   if(attr == undefined){
      attr = ''
   } else{
      attr = ` + ${defenseGear.attr[defenseType]}`
   }

   return `${bonus}${attr}`;
}

function _equipMainHand(gear, actorGears) {
   let updateData = {};
   const gearId = gear._id;
   const gearGrip = gear.system.qualifications.weaponGrip;
   const gearQuality = gear.system.quality;
   const gearType = gear.type;

   if (gearId === actorGears.mainHand.gearId) {
      updateData["system.gears.mainHand.gearId"] = "";
      updateData["system.gears.mainHand.gearQuality"] = NO_QUALITY;
      updateData["system.gears.mainHand.gearType"] = "";
   } else {
      _updateMainHandData(updateData, gearId, gearQuality, gearType, gearGrip);
   }

   return updateData;
}

function _equipOffHand(gear, actorGears, actor) {
   let updateData = {};
   const gearId = gear._id;
   const gearQuality = gear.system.quality;
   const mainHandGrip = _recoverGearGrip(actorGears.mainHand.gearId, actor);
   const gearType = gear.type;


   if (gearId === actorGears.offHand.gearId) {
      updateData["system.gears.offHand.gearId"] = "";
      updateData["system.gears.offHand.gearQuality"] = NO_QUALITY;
      updateData["system.gears.offHand.gearType"] = "";
   } else {
      _updateOffHandData(updateData, gearId, gearQuality, gearType, mainHandGrip);
   }

   return updateData;
}

function _equipArmor(armor, actorGears){
   let updateData = {};
   const gearId = armor._id;
   const gearQuality = armor.system.quality;

   if(gearId === actorGears.armor.gearId){
      updateData["system.gears.armor.gearId"] = "";
      updateData["system.gears.armor.gearQuality"] = NO_QUALITY;
   } else{
      updateData["system.gears.armor.gearId"] = gearId;
      updateData["system.gears.armor.gearQuality"] = gearQuality;
   }

   return updateData;
}

function _equipAccessory(accessory, actorGears){
   let updateData = {};
   const gearId = accessory._id;
   const gearQuality = accessory.system.quality;

   if(gearId === actorGears.accessory.gearId){
      updateData["system.gears.accessory.gearId"] = "";
      updateData["system.gears.accessory.gearQuality"] = NO_QUALITY;
   } else{
      updateData["system.gears.accessory.gearId"] = gearId;
      updateData["system.gears.accessory.gearQuality"] = gearQuality;
   }

   return updateData;
}

function _updateMainHandData(updateData, gearId, gearQuality, gearType, gearGrip) {
   updateData["system.gears.mainHand.gearId"] = gearId;
   updateData["system.gears.mainHand.gearQuality"] = gearQuality;
   updateData["system.gears.mainHand.gearType"] = gearType;

   if (_isTwoHandsGrip(gearGrip)) {
      updateData["system.gears.offHand.gearId"] = "";
      updateData["system.gears.offHand.gearQuality"] = NO_QUALITY;
      updateData["system.gears.offHand.gearType"] = "";
   }
}

function _updateOffHandData(updateData, gearId, gearQuality, gearType, mainHandGrip) {
   updateData["system.gears.offHand.gearId"] = gearId;
   updateData["system.gears.offHand.gearQuality"] = gearQuality;
   updateData["system.gears.offHand.gearType"] = gearType;

   if (_isTwoHandsGrip(mainHandGrip)) {
      updateData["system.gears.mainHand.gearId"] = "";
      updateData["system.gears.mainHand.gearQuality"] = NO_QUALITY;
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