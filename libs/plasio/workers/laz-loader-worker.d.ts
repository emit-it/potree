declare function readAs(buf: any, Type: any, offset: any, count: any): any;
declare function readAs(buf: any, Type: any, offset: any, count: any): any;
declare function parseLASHeader(arraybuffer: any): {
    pointsOffset: any;
    pointsFormatId: number;
    pointsStructSize: any;
    extraBytes: number;
    pointsCount: any;
    scale: any;
    offset: any;
    maxs: any[];
    mins: any[];
};
declare function parseLASHeader(arraybuffer: any): {
    pointsOffset: any;
    pointsFormatId: any;
    pointsStructSize: any;
    pointsCount: any;
    scale: any;
    offset: any;
    maxs: any[];
    mins: any[];
};
declare function handleEvent(msg: any): void;
declare function handleEvent(msg: any): void;
declare let instance: any;
