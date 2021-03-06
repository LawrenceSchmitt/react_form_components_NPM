import * as React from "react";
import { FontFamilyProperty, WidthProperty, ColorProperty, FontSizeProperty, FontWeightProperty } from "csstype";
export interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    labelSubtleColor?: ColorProperty;
    labelHighlightColor?: ColorProperty;
    labelFontFamily?: FontFamilyProperty;
    labelFontWeight?: FontWeightProperty;
    borderSubtleColor?: ColorProperty;
    borderHighlightColor?: ColorProperty;
    textColor?: ColorProperty;
    asteriskColor?: ColorProperty;
    errorColor?: ColorProperty;
    width?: WidthProperty<string | number>;
    fontFamily?: FontFamilyProperty;
    fontSize?: FontSizeProperty<string | number>;
    fontWeight?: FontWeightProperty;
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    className?: string;
    error?: boolean;
    errorText?: string;
    required?: boolean;
    type?: string;
}
declare const Input: React.SFC<InputProps>;
export default Input;
