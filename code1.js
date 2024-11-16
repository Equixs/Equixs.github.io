gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDNewSprite3Objects1= [];
gdjs.MenuCode.GDNewSprite3Objects2= [];
gdjs.MenuCode.GDNewSprite4Objects1= [];
gdjs.MenuCode.GDNewSprite4Objects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.MenuCode.GDNewSprite3Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.MenuCode.GDNewSprite3Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.MenuCode.GDNewSprite3Objects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MenuCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "carganding", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(1.0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.MenuCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNewSprite4Objects1[i].getBehavior("Opacity").getOpacity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNewSprite4Objects1[k] = gdjs.MenuCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite4Objects1[i].getBehavior("Opacity").setOpacity(gdjs.MenuCode.GDNewSprite4Objects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.MenuCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNewSprite4Objects1[i].getBehavior("Opacity").getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNewSprite4Objects1[k] = gdjs.MenuCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MenuCode.GDNewSprite4Objects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MenuCode.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
