import * as React from "react";
import { ColorProperty, WidthProperty, BorderRadiusProperty, FontWeightProperty, BackgroundColorProperty, PaddingProperty, FontFamilyProperty, FontSizeProperty, MarginProperty, HeightProperty } from "csstype";
export interface SubmitButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    disabledColor?: ColorProperty;
    backgroundcolor?: BackgroundColorProperty;
    fontWeight?: FontWeightProperty;
    fontFamily?: FontFamilyProperty;
    fontSize?: FontSizeProperty<string | number>;
    margin?: MarginProperty<string>;
    color?: ColorProperty;
    width?: WidthProperty<string | number>;
    height?: HeightProperty<string | number>;
    borderRadius?: BorderRadiusProperty<string | number>;
    padding?: PaddingProperty<string | number>;
    style?: React.CSSProperties;
}
declare const SubmitButton: React.SFC<SubmitButtonProps>;
export default SubmitButton;
