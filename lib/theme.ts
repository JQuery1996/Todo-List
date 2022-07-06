import { extendTheme } from "@chakra-ui/react";

import { colors } from "./custom-theme/colors";
import { fonts } from "./custom-theme/fonts";
import { config } from "./custom-theme/config";
import { components } from "./custom-theme/components";
import { styles } from "./custom-theme/styles";

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
