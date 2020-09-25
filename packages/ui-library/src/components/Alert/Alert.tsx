import React from "react";
import "./Alert.less";

export interface AlertProps {
    description: 'Info' | 'Success' | 'Error' | 'Warning';
    message?: string;
}

export const Alert: React.FC<AlertProps> = ({
    description,
    message
}) => {    
    let content = message ? message : description;
    return (
        <div className={`alert alert-${description.toLowerCase()}`}>
            {content}
        </div>
    );
};