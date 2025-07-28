import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '@/hooks/useTheme';
import { createHomeStyles } from "@/assets/styles/home.styles";



interface EditTodoProps {
  editText: string;
  setEditText: (text: string) => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
}

const EditTodo: React.FC<EditTodoProps> = ({
  editText,
  setEditText,
  handleSaveEdit,
  handleCancelEdit,
}) => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  return (

    <View style={homeStyles.editContainer}>
      <TextInput
        style={homeStyles.editInput}
        value={editText}
        onChangeText={setEditText}
        autoFocus
        multiline
        placeholder="Edit todo"
        placeholderTextColor={colors.textMuted}
      />
      <View style={homeStyles.editButtons}>
        <TouchableOpacity onPress={handleSaveEdit} activeOpacity={0.8}>
          <LinearGradient colors={colors.gradients.success} style={homeStyles.editButton}>
            <Ionicons name="checkmark" size={16} color="#fff" />
            <Text style={homeStyles.editButtonText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancelEdit} activeOpacity={0.8}>
          <LinearGradient colors={colors.gradients.muted} style={homeStyles.editButton}>
            <Ionicons name="close" size={16} color="#fff" />
            <Text style={homeStyles.editButtonText}>Cancel</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditTodo;
