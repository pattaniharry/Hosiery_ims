import { Ionicons } from "@expo/vector-icons";
import { ActionSheetIOS, Alert, Platform, Pressable, StyleSheet, Text } from "react-native";

export interface CategoryOption {
  id: string | number;
  label: string;
  value: string;
}

interface CategoryFilterProps {
  categories?: CategoryOption[];
  selectedCategory?: string;
  onChangeCategory?: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onChangeCategory,
}: CategoryFilterProps) {
  const label = selectedCategory && selectedCategory !== "all"
    ? categories?.find((category) => category.value === selectedCategory)?.label ?? selectedCategory
    : "All Categories";

  function handlePress() {
    if (!categories?.length || !onChangeCategory) {
      return;
    }

    const options = categories.map((category) => category.label);
    const cancelButtonIndex = options.length;

    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [...options, "Cancel"],
          cancelButtonIndex,
          title: "Select category",
        },
        (buttonIndex) => {
          if (buttonIndex !== undefined && buttonIndex < categories.length) {
            onChangeCategory(categories[buttonIndex].value);
          }
        },
      );
      return;
    }

    Alert.alert(
      "Select category",
      undefined,
      [
        ...categories.map((category) => ({
          text: category.label,
          onPress: () => onChangeCategory(category.value),
        })),
        { text: "Cancel", style: "cancel" as const },
      ],
    );
  }

  return (
    <Pressable style={styles.container} disabled={!categories?.length} onPress={handlePress}>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      <Ionicons name="chevron-down" size={16} color="#6B7280" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 46,
    minWidth: 150,
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
    marginRight: 8,
  },
});
