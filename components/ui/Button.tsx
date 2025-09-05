import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
}

export function Button({ 
  title, 
  className, 
  variant = 'primary', 
  icon,
  ...props 
}: ButtonProps) {
  const baseClasses = "py-4 rounded-xl flex-row items-center justify-center";
  
  const variantClasses = {
    primary: "bg-blue-500",
    secondary: "bg-gray-200 dark:bg-gray-700",
    danger: "bg-red-500",
  };
  
  const textClasses = {
    primary: "text-white",
    secondary: "text-gray-800 dark:text-white",
    danger: "text-white",
  };

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && <Text className="mr-2">{icon}</Text>}
      <Text className={`font-bold text-center text-lg ${textClasses[variant]}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}