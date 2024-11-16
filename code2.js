gdjs.gEIMOvErCode = {};
gdjs.gEIMOvErCode.localVariables = [];
gdjs.gEIMOvErCode.GDGeimOverObjects1= [];
gdjs.gEIMOvErCode.GDGeimOverObjects2= [];


gdjs.gEIMOvErCode.mapOfGDgdjs_9546gEIMOvErCode_9546GDGeimOverObjects1Objects = Hashtable.newFrom({"GeimOver": gdjs.gEIMOvErCode.GDGeimOverObjects1});
gdjs.gEIMOvErCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GeimOver"), gdjs.gEIMOvErCode.GDGeimOverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gEIMOvErCode.mapOfGDgdjs_9546gEIMOvErCode_9546GDGeimOverObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.gEIMOvErCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gEIMOvErCode.GDGeimOverObjects1.length = 0;
gdjs.gEIMOvErCode.GDGeimOverObjects2.length = 0;

gdjs.gEIMOvErCode.eventsList0(runtimeScene);
gdjs.gEIMOvErCode.GDGeimOverObjects1.length = 0;
gdjs.gEIMOvErCode.GDGeimOverObjects2.length = 0;


return;

}

gdjs['gEIMOvErCode'] = gdjs.gEIMOvErCode;
