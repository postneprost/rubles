function pluralizeRubles(count) {
    if ((count % 10 == 1) && (count % 100 != 11)) return "рубль";
        else if ((count % 10 == 0) || ((count % 100 > 4) && (count % 100 < 21)) || ((count % 10 > 4) && (count % 10 <= 9))) return "рублей";
            else return "рубля";
    }
