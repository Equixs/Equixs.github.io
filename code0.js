gdjs.OverworldCode = {};
gdjs.OverworldCode.localVariables = [];
gdjs.OverworldCode.GDNoButtonObjects1_1final = [];

gdjs.OverworldCode.GDYesButtonObjects1_1final = [];

gdjs.OverworldCode.GDPlayerObjects1= [];
gdjs.OverworldCode.GDPlayerObjects2= [];
gdjs.OverworldCode.GDPlayerObjects3= [];
gdjs.OverworldCode.GDPlayerObjects4= [];
gdjs.OverworldCode.GDNPCObjects1= [];
gdjs.OverworldCode.GDNPCObjects2= [];
gdjs.OverworldCode.GDNPCObjects3= [];
gdjs.OverworldCode.GDNPCObjects4= [];
gdjs.OverworldCode.GDTree1Objects1= [];
gdjs.OverworldCode.GDTree1Objects2= [];
gdjs.OverworldCode.GDTree1Objects3= [];
gdjs.OverworldCode.GDTree1Objects4= [];
gdjs.OverworldCode.GDTree2Objects1= [];
gdjs.OverworldCode.GDTree2Objects2= [];
gdjs.OverworldCode.GDTree2Objects3= [];
gdjs.OverworldCode.GDTree2Objects4= [];
gdjs.OverworldCode.GDBush1Objects1= [];
gdjs.OverworldCode.GDBush1Objects2= [];
gdjs.OverworldCode.GDBush1Objects3= [];
gdjs.OverworldCode.GDBush1Objects4= [];
gdjs.OverworldCode.GDHouse1Objects1= [];
gdjs.OverworldCode.GDHouse1Objects2= [];
gdjs.OverworldCode.GDHouse1Objects3= [];
gdjs.OverworldCode.GDHouse1Objects4= [];
gdjs.OverworldCode.GDHouse2Objects1= [];
gdjs.OverworldCode.GDHouse2Objects2= [];
gdjs.OverworldCode.GDHouse2Objects3= [];
gdjs.OverworldCode.GDHouse2Objects4= [];
gdjs.OverworldCode.GDDialogueObjects1= [];
gdjs.OverworldCode.GDDialogueObjects2= [];
gdjs.OverworldCode.GDDialogueObjects3= [];
gdjs.OverworldCode.GDDialogueObjects4= [];
gdjs.OverworldCode.GDEObjects1= [];
gdjs.OverworldCode.GDEObjects2= [];
gdjs.OverworldCode.GDEObjects3= [];
gdjs.OverworldCode.GDEObjects4= [];
gdjs.OverworldCode.GDE2Objects1= [];
gdjs.OverworldCode.GDE2Objects2= [];
gdjs.OverworldCode.GDE2Objects3= [];
gdjs.OverworldCode.GDE2Objects4= [];
gdjs.OverworldCode.GDYesButtonObjects1= [];
gdjs.OverworldCode.GDYesButtonObjects2= [];
gdjs.OverworldCode.GDYesButtonObjects3= [];
gdjs.OverworldCode.GDYesButtonObjects4= [];
gdjs.OverworldCode.GDNoButtonObjects1= [];
gdjs.OverworldCode.GDNoButtonObjects2= [];
gdjs.OverworldCode.GDNoButtonObjects3= [];
gdjs.OverworldCode.GDNoButtonObjects4= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects1= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects2= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects3= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects4= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects1= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects2= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects3= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects4= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects1= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects2= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects3= [];
gdjs.OverworldCode.GDTilemap_9595GroundObjects4= [];
gdjs.OverworldCode.GDTilemap_9595WaterObjects1= [];
gdjs.OverworldCode.GDTilemap_9595WaterObjects2= [];
gdjs.OverworldCode.GDTilemap_9595WaterObjects3= [];
gdjs.OverworldCode.GDTilemap_9595WaterObjects4= [];
gdjs.OverworldCode.GDTransitionObjects1= [];
gdjs.OverworldCode.GDTransitionObjects2= [];
gdjs.OverworldCode.GDTransitionObjects3= [];
gdjs.OverworldCode.GDTransitionObjects4= [];
gdjs.OverworldCode.GDTextBorderObjects1= [];
gdjs.OverworldCode.GDTextBorderObjects2= [];
gdjs.OverworldCode.GDTextBorderObjects3= [];
gdjs.OverworldCode.GDTextBorderObjects4= [];


gdjs.OverworldCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.OverworldCode.GDShadedDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.OverworldCode.GDTargetRoundButtonObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDShadedDarkJoystickObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.OverworldCode.GDTargetRoundButtonObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTargetRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDTree1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDBush1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDHouse1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDHouse2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNPCObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTilemap_95959595GroundObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTilemap_95959595WaterObjects1Objects = Hashtable.newFrom({"Tree1": gdjs.OverworldCode.GDTree1Objects1, "Bush1": gdjs.OverworldCode.GDBush1Objects1, "Tree2": gdjs.OverworldCode.GDTree2Objects1, "House1": gdjs.OverworldCode.GDHouse1Objects1, "House2": gdjs.OverworldCode.GDHouse2Objects1, "NPC": gdjs.OverworldCode.GDNPCObjects1, "Tilemap_Ground": gdjs.OverworldCode.GDTilemap_9595GroundObjects1, "Tilemap_Water": gdjs.OverworldCode.GDTilemap_9595WaterObjects1});
gdjs.OverworldCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14497420);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.OverworldCode.GDEObjects2);
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.OverworldCode.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.OverworldCode.GDYesButtonObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDEObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDEObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDYesButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OverworldCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNoButtonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").getYVelocity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").getYVelocity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").getXVelocity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").getXVelocity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.OverworldCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogue"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.OverworldCode.GDPlayerObjects2});
gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.OverworldCode.GDNPCObjects2});
gdjs.OverworldCode.asyncCallback14508444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OverworldCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Battle");
}gdjs.OverworldCode.localVariables.length = 0;
}
gdjs.OverworldCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OverworldCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.OverworldCode.asyncCallback14508444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverworldCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.OverworldCode.GDYesButtonObjects2, gdjs.OverworldCode.GDYesButtonObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDYesButtonObjects3.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDYesButtonObjects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDYesButtonObjects3[k] = gdjs.OverworldCode.GDYesButtonObjects3[i];
        ++k;
    }
}
gdjs.OverworldCode.GDYesButtonObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.OverworldCode.GDTransitionObjects3);
{for(var i = 0, len = gdjs.OverworldCode.GDTransitionObjects3.length ;i < len;++i) {
    gdjs.OverworldCode.GDTransitionObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.OverworldCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.OverworldCode.GDNoButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNoButtonObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNoButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDNoButtonObjects2[k] = gdjs.OverworldCode.GDNoButtonObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNoButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogue");
}}

}


};gdjs.OverworldCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14505692);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.OverworldCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDDialogueObjects2[i].getBehavior("AutoTyping").RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Talk.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.OverworldCode.GDDialogueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDDialogueObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDDialogueObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDDialogueObjects2[k] = gdjs.OverworldCode.GDDialogueObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDDialogueObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14507052);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.OverworldCode.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.OverworldCode.GDYesButtonObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDYesButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDNoButtonObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.OverworldCode.GDYesButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDYesButtonObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDYesButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDYesButtonObjects2[k] = gdjs.OverworldCode.GDYesButtonObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDYesButtonObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.OverworldCode.GDNoButtonObjects1.length = 0;

gdjs.OverworldCode.GDYesButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.OverworldCode.GDNoButtonObjects1_1final.length = 0;
gdjs.OverworldCode.GDYesButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.OverworldCode.GDNoButtonObjects2);
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDNoButtonObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDNoButtonObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.OverworldCode.GDNoButtonObjects2[k] = gdjs.OverworldCode.GDNoButtonObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDNoButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.OverworldCode.GDNoButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.OverworldCode.GDNoButtonObjects1_1final.indexOf(gdjs.OverworldCode.GDNoButtonObjects2[j]) === -1 )
            gdjs.OverworldCode.GDNoButtonObjects1_1final.push(gdjs.OverworldCode.GDNoButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.OverworldCode.GDYesButtonObjects2);
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDYesButtonObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDYesButtonObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.OverworldCode.GDYesButtonObjects2[k] = gdjs.OverworldCode.GDYesButtonObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDYesButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.OverworldCode.GDYesButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.OverworldCode.GDYesButtonObjects1_1final.indexOf(gdjs.OverworldCode.GDYesButtonObjects2[j]) === -1 )
            gdjs.OverworldCode.GDYesButtonObjects1_1final.push(gdjs.OverworldCode.GDYesButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.OverworldCode.GDNoButtonObjects1_1final, gdjs.OverworldCode.GDNoButtonObjects1);
gdjs.copyArray(gdjs.OverworldCode.GDYesButtonObjects1_1final, gdjs.OverworldCode.GDYesButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14510316);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "HoverSound.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}}

}


};gdjs.OverworldCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.OverworldCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsButtonPressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDPlayerObjects2Objects, gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDNPCObjects2Objects, 20, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14504604);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.OverworldCode.GDEObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogue");
}{for(var i = 0, len = gdjs.OverworldCode.GDEObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDEObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogue");
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bush1"), gdjs.OverworldCode.GDBush1Objects1);
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.OverworldCode.GDEObjects1);
gdjs.copyArray(runtimeScene.getObjects("House1"), gdjs.OverworldCode.GDHouse1Objects1);
gdjs.copyArray(runtimeScene.getObjects("House2"), gdjs.OverworldCode.GDHouse2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.OverworldCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Ground"), gdjs.OverworldCode.GDTilemap_9595GroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Water"), gdjs.OverworldCode.GDTilemap_9595WaterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree1"), gdjs.OverworldCode.GDTree1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree2"), gdjs.OverworldCode.GDTree2Objects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{for(var i = 0, len = gdjs.OverworldCode.GDTree1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree1Objects1[i].setZOrder((gdjs.OverworldCode.GDTree1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDBush1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDBush1Objects1[i].setZOrder((gdjs.OverworldCode.GDBush1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTree2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTree2Objects1[i].setZOrder((gdjs.OverworldCode.GDTree2Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDHouse1Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHouse1Objects1[i].setZOrder((gdjs.OverworldCode.GDHouse1Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDHouse2Objects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDHouse2Objects1[i].setZOrder((gdjs.OverworldCode.GDHouse2Objects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDNPCObjects1[i].setZOrder((gdjs.OverworldCode.GDNPCObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTilemap_9595GroundObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTilemap_9595GroundObjects1[i].setZOrder((gdjs.OverworldCode.GDTilemap_9595GroundObjects1[i].getY()));
}
for(var i = 0, len = gdjs.OverworldCode.GDTilemap_9595WaterObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDTilemap_9595WaterObjects1[i].setZOrder((gdjs.OverworldCode.GDTilemap_9595WaterObjects1[i].getY()));
}
}{for(var i = 0, len = gdjs.OverworldCode.GDEObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDEObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 0, 1, 10, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.OverworldCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bush1"), gdjs.OverworldCode.GDBush1Objects1);
gdjs.copyArray(runtimeScene.getObjects("House1"), gdjs.OverworldCode.GDHouse1Objects1);
gdjs.copyArray(runtimeScene.getObjects("House2"), gdjs.OverworldCode.GDHouse2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.OverworldCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Ground"), gdjs.OverworldCode.GDTilemap_9595GroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Water"), gdjs.OverworldCode.GDTilemap_9595WaterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree1"), gdjs.OverworldCode.GDTree1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree2"), gdjs.OverworldCode.GDTree2Objects1);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDTree1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDBush1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDTree2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDHouse1Objects1ObjectsGDgdjs_9546OverworldCode_9546GDHouse2Objects1ObjectsGDgdjs_9546OverworldCode_9546GDNPCObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTilemap_95959595GroundObjects1ObjectsGDgdjs_9546OverworldCode_9546GDTilemap_95959595WaterObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].setZOrder((gdjs.OverworldCode.GDPlayerObjects1[i].getPointY("")));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.OverworldCode.GDPlayerObjects1.length !== 0 ? gdjs.OverworldCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.OverworldCode.eventsList2(runtimeScene);
}


{


gdjs.OverworldCode.eventsList6(runtimeScene);
}


};

gdjs.OverworldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDPlayerObjects4.length = 0;
gdjs.OverworldCode.GDNPCObjects1.length = 0;
gdjs.OverworldCode.GDNPCObjects2.length = 0;
gdjs.OverworldCode.GDNPCObjects3.length = 0;
gdjs.OverworldCode.GDNPCObjects4.length = 0;
gdjs.OverworldCode.GDTree1Objects1.length = 0;
gdjs.OverworldCode.GDTree1Objects2.length = 0;
gdjs.OverworldCode.GDTree1Objects3.length = 0;
gdjs.OverworldCode.GDTree1Objects4.length = 0;
gdjs.OverworldCode.GDTree2Objects1.length = 0;
gdjs.OverworldCode.GDTree2Objects2.length = 0;
gdjs.OverworldCode.GDTree2Objects3.length = 0;
gdjs.OverworldCode.GDTree2Objects4.length = 0;
gdjs.OverworldCode.GDBush1Objects1.length = 0;
gdjs.OverworldCode.GDBush1Objects2.length = 0;
gdjs.OverworldCode.GDBush1Objects3.length = 0;
gdjs.OverworldCode.GDBush1Objects4.length = 0;
gdjs.OverworldCode.GDHouse1Objects1.length = 0;
gdjs.OverworldCode.GDHouse1Objects2.length = 0;
gdjs.OverworldCode.GDHouse1Objects3.length = 0;
gdjs.OverworldCode.GDHouse1Objects4.length = 0;
gdjs.OverworldCode.GDHouse2Objects1.length = 0;
gdjs.OverworldCode.GDHouse2Objects2.length = 0;
gdjs.OverworldCode.GDHouse2Objects3.length = 0;
gdjs.OverworldCode.GDHouse2Objects4.length = 0;
gdjs.OverworldCode.GDDialogueObjects1.length = 0;
gdjs.OverworldCode.GDDialogueObjects2.length = 0;
gdjs.OverworldCode.GDDialogueObjects3.length = 0;
gdjs.OverworldCode.GDDialogueObjects4.length = 0;
gdjs.OverworldCode.GDEObjects1.length = 0;
gdjs.OverworldCode.GDEObjects2.length = 0;
gdjs.OverworldCode.GDEObjects3.length = 0;
gdjs.OverworldCode.GDEObjects4.length = 0;
gdjs.OverworldCode.GDE2Objects1.length = 0;
gdjs.OverworldCode.GDE2Objects2.length = 0;
gdjs.OverworldCode.GDE2Objects3.length = 0;
gdjs.OverworldCode.GDE2Objects4.length = 0;
gdjs.OverworldCode.GDYesButtonObjects1.length = 0;
gdjs.OverworldCode.GDYesButtonObjects2.length = 0;
gdjs.OverworldCode.GDYesButtonObjects3.length = 0;
gdjs.OverworldCode.GDYesButtonObjects4.length = 0;
gdjs.OverworldCode.GDNoButtonObjects1.length = 0;
gdjs.OverworldCode.GDNoButtonObjects2.length = 0;
gdjs.OverworldCode.GDNoButtonObjects3.length = 0;
gdjs.OverworldCode.GDNoButtonObjects4.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects3.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects4.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects1.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects2.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects3.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects4.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects1.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects2.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects3.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects4.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;
gdjs.OverworldCode.GDTransitionObjects4.length = 0;
gdjs.OverworldCode.GDTextBorderObjects1.length = 0;
gdjs.OverworldCode.GDTextBorderObjects2.length = 0;
gdjs.OverworldCode.GDTextBorderObjects3.length = 0;
gdjs.OverworldCode.GDTextBorderObjects4.length = 0;

gdjs.OverworldCode.eventsList7(runtimeScene);
gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDPlayerObjects4.length = 0;
gdjs.OverworldCode.GDNPCObjects1.length = 0;
gdjs.OverworldCode.GDNPCObjects2.length = 0;
gdjs.OverworldCode.GDNPCObjects3.length = 0;
gdjs.OverworldCode.GDNPCObjects4.length = 0;
gdjs.OverworldCode.GDTree1Objects1.length = 0;
gdjs.OverworldCode.GDTree1Objects2.length = 0;
gdjs.OverworldCode.GDTree1Objects3.length = 0;
gdjs.OverworldCode.GDTree1Objects4.length = 0;
gdjs.OverworldCode.GDTree2Objects1.length = 0;
gdjs.OverworldCode.GDTree2Objects2.length = 0;
gdjs.OverworldCode.GDTree2Objects3.length = 0;
gdjs.OverworldCode.GDTree2Objects4.length = 0;
gdjs.OverworldCode.GDBush1Objects1.length = 0;
gdjs.OverworldCode.GDBush1Objects2.length = 0;
gdjs.OverworldCode.GDBush1Objects3.length = 0;
gdjs.OverworldCode.GDBush1Objects4.length = 0;
gdjs.OverworldCode.GDHouse1Objects1.length = 0;
gdjs.OverworldCode.GDHouse1Objects2.length = 0;
gdjs.OverworldCode.GDHouse1Objects3.length = 0;
gdjs.OverworldCode.GDHouse1Objects4.length = 0;
gdjs.OverworldCode.GDHouse2Objects1.length = 0;
gdjs.OverworldCode.GDHouse2Objects2.length = 0;
gdjs.OverworldCode.GDHouse2Objects3.length = 0;
gdjs.OverworldCode.GDHouse2Objects4.length = 0;
gdjs.OverworldCode.GDDialogueObjects1.length = 0;
gdjs.OverworldCode.GDDialogueObjects2.length = 0;
gdjs.OverworldCode.GDDialogueObjects3.length = 0;
gdjs.OverworldCode.GDDialogueObjects4.length = 0;
gdjs.OverworldCode.GDEObjects1.length = 0;
gdjs.OverworldCode.GDEObjects2.length = 0;
gdjs.OverworldCode.GDEObjects3.length = 0;
gdjs.OverworldCode.GDEObjects4.length = 0;
gdjs.OverworldCode.GDE2Objects1.length = 0;
gdjs.OverworldCode.GDE2Objects2.length = 0;
gdjs.OverworldCode.GDE2Objects3.length = 0;
gdjs.OverworldCode.GDE2Objects4.length = 0;
gdjs.OverworldCode.GDYesButtonObjects1.length = 0;
gdjs.OverworldCode.GDYesButtonObjects2.length = 0;
gdjs.OverworldCode.GDYesButtonObjects3.length = 0;
gdjs.OverworldCode.GDYesButtonObjects4.length = 0;
gdjs.OverworldCode.GDNoButtonObjects1.length = 0;
gdjs.OverworldCode.GDNoButtonObjects2.length = 0;
gdjs.OverworldCode.GDNoButtonObjects3.length = 0;
gdjs.OverworldCode.GDNoButtonObjects4.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects3.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects4.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects1.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects2.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects3.length = 0;
gdjs.OverworldCode.GDTilemap_9595GroundObjects4.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects1.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects2.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects3.length = 0;
gdjs.OverworldCode.GDTilemap_9595WaterObjects4.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;
gdjs.OverworldCode.GDTransitionObjects4.length = 0;
gdjs.OverworldCode.GDTextBorderObjects1.length = 0;
gdjs.OverworldCode.GDTextBorderObjects2.length = 0;
gdjs.OverworldCode.GDTextBorderObjects3.length = 0;
gdjs.OverworldCode.GDTextBorderObjects4.length = 0;


return;

}

gdjs['OverworldCode'] = gdjs.OverworldCode;
