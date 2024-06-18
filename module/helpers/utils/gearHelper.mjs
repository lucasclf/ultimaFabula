export function recoverAccuracyWeapon(weapon){
   return weapon.attr.firstAttr +" + "+weapon.attr.firstAttr +" "+ weapon.atkBonus;
}

export function isEquiped(gearId, actorGearId){
   return gearId == actorGearId;
}

export async function equipGear(gear, gearSlot, actor){

   const actorGears = actor.system.gears;

   switch(gearSlot) {
      case 'mainHand':
         return _equipMainHand(gear, actorGears);
         break;
      case 'offHand':
         return _equipOffHand(gear, actorGears, actor);
         break;
      case 'armor':
         return _equipArmor(gear, actorGears);
         break;
      case 'accessory':
         return _equipAccessory(gear, actorGears);
         break;
      default:
         return "";
   }
}

function _equipMainHand(gear, actorGears){
   let updateData = {};
   const gearId = gear._id;
   const gearGrip = gear.system.qualifications.weaponGrip;
   const gearQuality = gear.quality;
   const gearType = gear.type;

   if(gearId === actorGears.mainHand.gearId){
      updateData["system.gears.mainHand.gearId"] = "";
      updateData["system.gears.mainHand.gearQuality"] = "";
      updateData["system.gears.mainHand.gearType"] = "";
   } else{
      updateData["system.gears.mainHand.gearId"] = gearId;
      updateData["system.gears.mainHand.gearQuality"] = gearQuality;
      updateData["system.gears.mainHand.gearType"] =gearType;

      if(gearGrip === CONFIG.FABULA_ULTIMA.enums.weaponGrip.TWO_HAND){
         updateData["system.gears.offHand.gearId"] = "";
         updateData["system.gears.offHand.gearQuality"] = "";
         updateData["system.gears.offHand.gearType"] = "";
      }
   }

   return updateData;
}

function _equipOffHand(gear, actorGears, actor){
   let updateData = {};
   const gearId = gear._id;
   const gearQuality = gear.quality;
   const mainGearGrip = _recoverGearGrip(actorGears.mainHand.gearId, actor);
   const gearType = gear.type;


   if(gearId === actorGears.offHand.gearId){
      updateData["system.gears.offHand.gearId"] = "";
      updateData["system.gears.offHand.gearQuality"] = "";
      updateData["system.gears.mainHand.gearType"] = "";
   } else{
      updateData["system.gears.offHand.gearId"] = gearId;
      updateData["system.gears.offHand.gearQuality"] = gearQuality;
      updateData["system.gears.offHand.gearType"] = gearType;

      if(mainGearGrip === CONFIG.FABULA_ULTIMA.enums.weaponGrip.TWO_HAND){
         updateData["system.gears.mainHand.gearId"] = "";
         updateData["system.gears.mainHand.gearQuality"] = "";
         updateData["system.gears.mainHand.gearType"] = "";
      }
   }
   
   return updateData;
}

function _equipArmor(armor, actorGears){
   return false;
}

function _equipAccessory(accessory, actorGears){
   return false;
}

function _recoverGearGrip(gearId, actor){
   const gear = actor.items.get(gearId);
   return gear?.system.qualifications.weaponGrip || "";
};