import { RatingProps } from "../../@types";

import { View } from "react-native";
import { useEffect, useState } from "react";

import { styles } from "./styles";
import theme from "../../theme/global";

import { Icon } from "@rneui/themed";

export function Rating({ rating }: RatingProps) {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const starsArray: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starsArray.push(
          <Icon
            key={i}
            type="entypo"
            name="star"
            color={theme.COLORS.YELLOW_700}
          />
        );
      } else {
        starsArray.push(
          <Icon
            key={i}
            type="entypo"
            name="star-outlined"
            color={theme.COLORS.YELLOW_700}
          />
        );
      }
    }
    setStars(starsArray);
  }, [rating]);

  return <View style={styles.container}>{stars}</View>;
}
