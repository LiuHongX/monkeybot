// Auto-generated. Do not edit.



    //% color=50 weight=19
    //% icon="\uf1eb"
declare namespace MonkeybotIR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="当|%btn|按钮按下" shim=MonkeybotIR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="连接遥控接收到引脚%pin" shim=MonkeybotIR::init
    export function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
