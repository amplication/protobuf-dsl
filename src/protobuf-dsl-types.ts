
export declare enum ScalarType {
    String = "String",
    Boolean = "Boolean",
    Int = "Int",
    Float = "Float",
    DateTime = "DateTime",
    Json = "Json"
}

export type Field =  {
    name: string;
    type: ScalarType;
    locNumber: number;
};

export type Message = {
    name: string;
    fields:Field[];
};

export type Schema = {
    service: Service;
    messages: Message[];
};

export type Service = {
    name:string;
    methods: Method[];
}

export type Method = {
    name:string;
    inputObjectName: string; 
    outputObjectName: string; 
}
