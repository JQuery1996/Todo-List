import type {
    ThemeTypings,
    ComponentWithAs,
    IconProps,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type IIcon = ComponentWithAs<"svg", IconProps> | IconType;

export interface IToggleButton {
    FirstIcon: IIcon;
    SecondIcon: IIcon;
    firstColor: ThemeTypings["colorSchemes"];
    secondColor: ThemeTypings["colorSchemes"];
    onClick: Function;
}

export type STATE = "ON" | "OFF";
