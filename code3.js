gdjs.cargandingCode = {};
gdjs.cargandingCode.localVariables = [];
gdjs.cargandingCode.GDNewSpriteObjects1= [];
gdjs.cargandingCode.GDNewSpriteObjects2= [];
gdjs.cargandingCode.GDNewSprite2Objects1= [];
gdjs.cargandingCode.GDNewSprite2Objects2= [];


gdjs.cargandingCode.asyncCallback10616164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cargandingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Juego", false);
}gdjs.cargandingCode.localVariables.length = 0;
}
gdjs.cargandingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.cargandingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.cargandingCode.asyncCallback10616164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.cargandingCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.cargandingCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cargandingCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.cargandingCode.GDNewSprite2Objects1[i].getBehavior("Opacity").getOpacity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.cargandingCode.GDNewSprite2Objects1[k] = gdjs.cargandingCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.cargandingCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.cargandingCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.cargandingCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.cargandingCode.GDNewSprite2Objects1[i].getBehavior("Opacity").setOpacity(gdjs.cargandingCode.GDNewSprite2Objects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.cargandingCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cargandingCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.cargandingCode.GDNewSprite2Objects1[i].getBehavior("Opacity").getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.cargandingCode.GDNewSprite2Objects1[k] = gdjs.cargandingCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.cargandingCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.cargandingCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.cargandingCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.cargandingCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.cargandingCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.cargandingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cargandingCode.GDNewSpriteObjects1.length = 0;
gdjs.cargandingCode.GDNewSpriteObjects2.length = 0;
gdjs.cargandingCode.GDNewSprite2Objects1.length = 0;
gdjs.cargandingCode.GDNewSprite2Objects2.length = 0;

gdjs.cargandingCode.eventsList1(runtimeScene);
gdjs.cargandingCode.GDNewSpriteObjects1.length = 0;
gdjs.cargandingCode.GDNewSpriteObjects2.length = 0;
gdjs.cargandingCode.GDNewSprite2Objects1.length = 0;
gdjs.cargandingCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['cargandingCode'] = gdjs.cargandingCode;
