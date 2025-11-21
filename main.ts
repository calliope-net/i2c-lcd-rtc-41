lcd.init_display(lcd.eDisplay.qwiic_16_2)
loops.everyInterval(1000, function () {
    pins.rtc_read()
    lcd.write_text(0, 3, 4, pins.rtc_get_string(pins.rtc_eFormat.ddd))
    lcd.write_text(0, 6, 15, pins.rtc_get_string(pins.rtc_eFormat.ddMM20yy))
    lcd.write_text(1, 6, 15, pins.rtc_get_string(pins.rtc_eFormat.hhmss))
    pins.Anzeige25LED(pins.rtc_e25LED.Zeit)
})
