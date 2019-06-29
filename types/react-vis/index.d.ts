// Type definitions for react-vis 1.11
// Project: https://github.com/uber/react-vis
// Definitions by: Tyler Miller <https://github.com/fstylermiller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import {
    Component,
    ComponentType,
    PureComponent,
    ReactChild,
    ReactNode,
    SFC,
    MouseEventHandler,
    TouchEventHandler,
    WheelEventHandler,
    FocusEventHandler,
    MouseEvent,
    CSSProperties,
} from 'react';

export {};

export interface AbstractSeriesPoint {
    [key: string]: any;
}

export type RVMouseEventHandler = MouseEventHandler<HTMLElement>;
export type RVTouchEventHandler = TouchEventHandler<HTMLElement>;
export type RVWheelEventHandler = WheelEventHandler<HTMLElement>;
export type RVFocusEventHandler = FocusEventHandler<HTMLElement>;

export type RVBrushEventHandler = (e?: { left: number; top: number; right: number; bottom: number }) => void;

export type RVSearchChangeEventHandler = (value: string) => void;

export type RVItemEventHandler = (item: any, index: number, event: MouseEvent<HTMLElement>) => void;

export type RVValueEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, event: MouseEvent<HTMLElement>) => void;

export interface RVNearestXData<T extends AbstractSeriesPoint> {
    event: MouseEvent<HTMLElement>;
    innerX: T['x'];
    index: number;
}

export type RVNearestXEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXData<T>) => void;

export interface RVNearestXYData<T extends AbstractSeriesPoint> {
    event: MouseEvent<HTMLElement>;
    innerX: T['x'];
    innerY: T['y'];
    index: number;
}

export type RVNearestXYEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXYData<T>) => void;

export type RVGet<T extends AbstractSeriesPoint, K extends keyof T> = (datapoint: T) => T[K];
export type RVGetNull<T extends AbstractSeriesPoint> = (datapoint: T) => any;
export type RVGetAlignStyle = (align: { horizontal: string; vertical: string }, x: number, y: number) => CSSProperties;

export type RVTickFormat = (tick: any) => string;

export type RVItemsFormat = (values: any[]) => Array<{ value: any; title: any }>;
export type RVTitleFormat = (values: any[]) => { value: any; title: any } | undefined;

export type RVHintFormat = (value: { [key: string]: any }) => Array<{ value: any; title: any }>;

export type RVPadAngle = (...args: any[]) => number | undefined;

export type RVSearchFn = (items: any[], searchText: string) => any[];

export type RVSortFn<T extends AbstractSeriesPoint> = (a: T, b: T, accessor: (val: T) => number) => number;

export interface LineSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    color?: string | number;
}

export interface LineMarkSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
    size?: string | number;
}

export interface MarkSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
    size?: string | number;
}

export interface HorizontalBarSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: string | number;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}

export interface VerticalBarSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: number;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}

export interface ArcSeriesPoint extends AbstractSeriesPoint {
    angle0: number;
    angle: number;
    radius0: number;
    radius: number;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}

export interface AreaSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    y0?: number;
}

export interface ContourSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface HeatmapSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    color?: string | number;
}

export interface LabelSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: string | number;
    label: string;
    xOffset?: number;
    yOffset?: number;
    rotation?: number;
    style?: CSSProperties;
}

export interface CustomSVGSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: string | number;
}

export interface PolygonSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface RectSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    x0: string | number | Date;
    y: string | number | Date;
    y0: string | number | Date;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}

export type HorizontalRectSeriesPoint = RectSeriesPoint;
export type VerticalRectSeriesPoint = RectSeriesPoint;

export interface WhiskerSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    size?: string | number;
    xVariance?: string | number;
    yVariance?: string | number;
}

export interface TreemapPoint extends AbstractSeriesPoint {
    title: string;
    size: number;
    opacity?: number;
    color?: string | number;
    style: CSSProperties;
    children: TreemapPoint[];
}

export interface ParallelCoordinatesPoint extends AbstractSeriesPoint {
    [key: string]: number;
}

export interface RadialChartPoint extends AbstractSeriesPoint {
    angle: number;
    radius?: number;
    label?: string;
    subLabel?: string;
    color?: string;
    style?: object;
    className?: string;
}

export interface SankeyPoint extends AbstractSeriesPoint {
    name: string;
    color?: string;
    opacity?: number;
    key?: string;
}

export interface SunburstPoint extends AbstractSeriesPoint {
    title: string;
    size: number;
    color?: number;
    label?: string;
    labelStyle?: CSSProperties;
    dontRotateLabel?: boolean;
    children?: SunburstPoint[];
}

export interface VoronoiPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface HexbinSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface DecorativeAxisPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface RadarChartPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface HighlightPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export function makeVisFlexible<T>(
    component: ComponentType<T>
): ComponentType<Pick<T, Exclude<keyof T, 'width' | 'height'>>>;

export function makeHeightFlexible<T>(component: ComponentType<T>): ComponentType<Pick<T, Exclude<keyof T, 'height'>>>;

export function makeWidthFlexible<T>(component: ComponentType<T>): ComponentType<Pick<T, Exclude<keyof T, 'width'>>>;

type TVGetTickValues = (scale: any, tickTotal: number, tickValues: any[]) => any[];

export const AxisUtils: {
    DIRECTION: {
        VERTICAL: 'vertical';
        HORIZONTAL: 'horizontal';
    };
    ORIENTATION: {
        TOP: 'top';
        LEFT: 'left';
        RIGHT: 'right';
        BOTTOM: 'bottom';
        VERTICAL: 'vertical';
        HORIZONTAL: 'horizontal';
    };
    getTicksTotalFromSize: (size: number) => number;
    getTickValues: (
        scale: TVGetTickValues,
        tickTotal: number,
        tickValues?: Array<number | string>
    ) => Array<number | string>;
};

// manually created may not be perfect
export type RVGetDomainByAccessor = <T extends {}>(
    allData: T[],
    accessor: (x: T) => any, // is probably, number | string,
    accessor0: (x: T) => any, // is probably, number | string,
    type: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc'
) => void;

export const ScaleUtils: {
    extractScalePropsFromProps: (
        props: AbstractSeriesProps<AbstractSeriesPoint>,
        attributes: string[]
    ) => { [key: string]: any };
    getAttributeScale: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
    getAttributeFunctor: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
    getAttr0Functor: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
    getAttributeValue: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
    getDomainByAccessor: RVGetDomainByAccessor;
    getFontColorFromBackground: (background?: string | null) => string | null;
    getMissingScaleProps: (
        props: AbstractSeriesProps<AbstractSeriesPoint>,
        data: any[],
        attributes: string[]
    ) => { [key: string]: any };
    getOptionalScaleProps: (props: AbstractSeriesProps<AbstractSeriesPoint>) => { [key: string]: any };
    getScaleObjectFromProps: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
    getScalePropTypesByAttribute: (attr: string) => { [key: string]: any };
    getXYPlotValues: (
        props: AbstractSeriesProps<AbstractSeriesPoint>,
        children: ReactChild[]
    ) => { [key: string]: any };
    literalScale: (defaultValue: any) => any;
};

// Goal to remove extends AbstractSeriesPoint here.
export interface AbstractSeriesProps<T extends AbstractSeriesPoint> {
    _xValue?: T['x'];
    xDomain?: Array<T['x']>;
    getX?: RVGet<T, 'x'>;
    getX0?: RVGet<T, 'x0'>;
    xRange?: Array<T['x']>;
    xType?: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';
    xDistance?: number;
    xBaseValue?: T['x'];
    _yValue?: T['y'];
    yDomain?: Array<T['y']>;
    getY?: RVGet<T, 'y'>;
    getY0?: RVGet<T, 'y0'>;
    yRange?: Array<T['y']>;
    yType?: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';
    yDistance?: number;
    yBaseValue?: T['y'];
    _sizeValue?: T['size'];
    sizeDomain?: Array<T['size']>;
    getSize?: RVGet<T, 'size'>;
    getSize0?: RVGet<T, 'size0'>;
    sizeRange?: Array<T['size']>;
    sizeType?: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';
    sizeDistance?: number;
    sizeBaseValue?: T['size'];
    _opacityValue?: T['opacity'];
    opacityDomain?: Array<T['opacity']>;
    getOpacity?: RVGet<T, 'opacity'>;
    getOpacity0?: RVGet<T, 'opacity0'>;
    opacityRange?: Array<T['opacity']>;
    opacityType?: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';
    opacityDistance?: number;
    opacityBaseValue?: T['opacity'];
    _colorValue?: T['color'];
    colorDomain?: Array<T['color']>;
    getColor?: RVGet<T, 'color'>;
    getColor0?: RVGet<T, 'color0'>;
    colorRange?: Array<T['color']>;
    colorType?: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';
    colorDistance?: number;
    colorBaseValue?: T['color'];
    width?: number;
    height?: number;
    data?: Array<T | any[]>;
    onValueMouseOver?: RVValueEventHandler<T>;
    onValueMouseOut?: RVValueEventHandler<T>;
    onValueClick?: RVValueEventHandler<T>;
    onValueRightClick?: RVValueEventHandler<T>;
    onSeriesMouseOver?: RVMouseEventHandler;
    onSeriesMouseOut?: RVMouseEventHandler;
    onSeriesClick?: RVMouseEventHandler;
    onSeriesRightClick?: RVMouseEventHandler;
    onNearestX?: RVNearestXEventHandler<T>;
    onNearestXY?: RVNearestXEventHandler<T>;
    style?: CSSProperties;
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    stack?: boolean;
    color?: string | number;
    stroke?: string | number;
    fill?: string | number;
    opacity?: number;
}

export class AbstractSeries<T> extends PureComponent<T> {}

export interface ArcSeriesProps extends AbstractSeriesProps<ArcSeriesPoint> {
    _radiusValue?: ArcSeriesPoint['radius'];
    radiusDomain?: Array<ArcSeriesPoint['radius']>;
    getRadius?: RVGet<ArcSeriesPoint, 'radius'>;
    getRadius0?: RVGet<ArcSeriesPoint, 'radius0'>;
    radiusRange?: Array<ArcSeriesPoint['radius']>;
    radiusType?: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';
    radiusDistance?: number;
    radiusBaseValue?: ArcSeriesPoint['radius'];
    _angleValue?: ArcSeriesPoint['angle'];
    angleDomain?: Array<ArcSeriesPoint['angle']>;
    getAngle?: RVGet<ArcSeriesPoint, 'angle'>;
    getAngle0?: RVGet<ArcSeriesPoint, 'angle0'>;
    angleRange?: Array<ArcSeriesPoint['angle']>;
    angleType?: 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';
    angleDistance?: number;
    angleBaseValue?: ArcSeriesPoint['angle'];
    center?: {
        x?: number;
        y?: number;
    };
    arcClassName?: string;
    padAngle?: RVPadAngle | number;
}

export class ArcSeries extends AbstractSeries<ArcSeriesProps> {}

export interface AreaSeriesProps extends AbstractSeriesProps<AreaSeriesPoint> {
    getNull?: RVGetNull<AreaSeriesPoint>;
}

export class AreaSeries extends AbstractSeries<AreaSeriesProps> {}

export interface BordersProps {
    style?: {
        bottom?: CSSProperties;
        left?: CSSProperties;
        right?: CSSProperties;
        top?: CSSProperties;
    };
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}

export const Borders: SFC<BordersProps>;

export interface ChartLabelProps {
    className?: string;
    includeMargin?: boolean;
    style?: CSSProperties;
    text?: string;
    xPercent?: number;
    yPercent?: number;
}

export class ChartLabel extends PureComponent<ChartLabelProps> {}

export interface CircularGridLinesProps {
    centerX?: number;
    centerY?: number;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    rRange?: number[];
    style?: CSSProperties;
    tickValues?: number[];
    tickTotal?: number;
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}

export class CircularGridLines extends PureComponent<CircularGridLinesProps> {}

export interface ContourSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
    bandwidth?: number;
    className?: string;
    marginLeft?: number;
    marginTop?: number;
}

export class ContourSeries extends AbstractSeries<ContourSeriesProps> {}

export interface CrosshairProps {
    className?: string;
    values?: Array<number | string | { [key: string]: any }>;
    series?: { [key: string]: any };
    innerWidth?: number;
    innerHeight?: number;
    marginLeft?: number;
    marginTop?: number;
    orientation?: 'left' | 'right';
    itemsFormat?: RVItemsFormat;
    titleFormat?: RVTitleFormat;
    style?: {
        line?: CSSProperties;
        title?: CSSProperties;
        box?: CSSProperties;
    };
}

export class Crosshair extends PureComponent<CrosshairProps> {}

export interface CustomSVGSeriesProps extends AbstractSeriesProps<CustomSVGSeriesPoint> {
    className?: string;
    customComponent?: string | React.FunctionComponentElement<any>;
    marginLeft?: number;
    marginTop?: number;
    size?: number;
}

export class CustomSVGSeries extends AbstractSeries<CustomSVGSeriesProps> {}

export interface DecorativeAxisProps extends AbstractSeriesProps<DecorativeAxisPoint> {
    axisDomain: number[];
    axisEnd: {
        x?: number | string;
        y?: number | string;
    };
    axisStart: {
        x?: number | string;
        y?: number | string;
    };
    className?: string;
    numberOfTicks?: number;
    tickValue?: RVTickFormat;
    tickSize?: number;
}

export class DecorativeAxis extends AbstractSeries<DecorativeAxisProps> {}

export interface GradientDefsProps {
    className?: string;
}

export const GradientDefs: SFC<GradientDefsProps>;

export interface GridLinesProps {
    direction?: 'vertical' | 'horizontal';
    attr: string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    style?: CSSProperties;
    tickValues?: Array<number | string>;
    tickTotal?: number;
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}

export class GridLines extends PureComponent<GridLinesProps> {}

export interface HeatmapSeriesProps extends AbstractSeriesProps<HeatmapSeriesPoint> {}
export class HeatmapSeries extends AbstractSeries<HeatmapSeriesProps> {}

export interface HexbinSeriesProps extends AbstractSeriesProps<HexbinSeriesPoint> {
    radius?: number;
}

export class HexbinSeries extends AbstractSeries<HexbinSeriesProps> {}

export interface HighlightProps extends AbstractSeriesProps<HighlightPoint> {
    enableX?: boolean;
    enableY?: boolean;
    highlightHeight?: number;
    highlightWidth?: number;
    highlightX?: string | number;
    highlightY?: string | number;
    onBrushStart?: RVMouseEventHandler;
    onDragStart?: RVMouseEventHandler;
    onBrush?: RVBrushEventHandler;
    onDrag?: RVBrushEventHandler;
    onBrushEnd?: RVBrushEventHandler;
    onDragEnd?: RVBrushEventHandler;
}

export class Highlight extends AbstractSeries<HighlightProps> {}

export interface HintProps {
    marginTop?: number;
    marginLeft?: number;
    innerWidth?: number;
    innerHeight?: number;
    scales?: { [key: string]: any };
    value?: { [key: string]: any };
    format?: RVHintFormat;
    style?: CSSProperties;
    className?: string;
    align?: {
        horizontal?: 'auto' | 'left' | 'right' | 'leftEdge' | 'rightEdge';
        vertical?: 'auto' | 'bottom' | 'top' | 'bottomEdge' | 'topEdge';
    };
    getAlignStyle?: RVGetAlignStyle;
    orientation?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
}

export class Hint extends PureComponent<HintProps> {}

export interface HorizontalBarSeriesProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
export class HorizontalBarSeries extends AbstractSeries<HorizontalBarSeriesProps> {}

export interface HorizontalBarSeriesCanvasProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
export class HorizontalBarSeriesCanvas extends AbstractSeries<HorizontalBarSeriesCanvasProps> {}

export interface HorizontalGridLinesProps {
    direction?: 'horizontal';
    attr?: string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    style?: CSSProperties;
    tickValues?: Array<number | string>;
    tickTotal?: number;
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}

export const HorizontalGridLines: SFC<HorizontalGridLinesProps>;

export interface HorizontalRectSeriesProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
export class HorizontalRectSeries extends AbstractSeries<HorizontalRectSeriesProps> {}

export interface HorizontalRectSeriesCanvasProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
export class HorizontalRectSeriesCanvas extends AbstractSeries<HorizontalRectSeriesCanvasProps> {}

export interface LabelSeriesProps extends AbstractSeriesProps<LabelSeriesPoint> {
    allowOffsetToBeReversed?: boolean;
    className?: string;
    marginLeft?: number;
    marginTop?: number;
    rotation?: number;
    labelAnchorX?: string;
    labelAnchorY?: string;
}

export class LabelSeries extends AbstractSeries<LabelSeriesProps> {}

export interface LineMarkSeriesProps<T extends LineMarkSeriesPoint> extends AbstractSeriesProps<T> {
    strokeStyle?: 'dashed' | 'solid';
    curve?: string | ((curve: any) => any);
    getNull?: RVGetNull<T>;
    lineStyle?: CSSProperties;
    markStyle?: CSSProperties;
}

export class LineMarkSeries<T extends LineMarkSeriesPoint> extends AbstractSeries<LineMarkSeriesProps<T>> {}

export interface LineMarkSeriesCanvasProps<T extends LineMarkSeriesPoint> extends AbstractSeriesProps<T> {}

export class LineMarkSeriesCanvas<T extends LineMarkSeriesPoint> extends AbstractSeries<LineMarkSeriesCanvasProps<T>> {}

export interface LineSeriesProps extends AbstractSeriesProps<LineSeriesPoint> {
    strokeStyle?: 'dashed' | 'solid';
    curve?: string | ((curve: any) => any);
    getNull?: RVGetNull<LineSeriesPoint>;
}

export class LineSeries extends AbstractSeries<LineSeriesProps> {}

export interface LineSeriesCanvasProps extends AbstractSeriesProps<LineSeriesPoint> {
    strokeWidth?: number;
}
export class LineSeriesCanvas extends AbstractSeries<LineSeriesCanvasProps> {}

export interface MarkSeriesProps<T extends MarkSeriesPoint> extends AbstractSeriesProps<T> {
    getNull?: RVGetNull<T>;
    strokeWidth?: number;
    size?: number;
}
export class MarkSeries<T extends MarkSeriesPoint> extends AbstractSeries<MarkSeriesProps<T>> {}

export interface MarkSeriesCanvasProps<T extends MarkSeriesPoint> extends AbstractSeriesProps<T> {}
export class MarkSeriesCanvas<T extends MarkSeriesPoint> extends AbstractSeries<MarkSeriesCanvasProps<T>> {}

export interface PolygonSeriesProps extends AbstractSeriesProps<PolygonSeriesPoint> {}
export class PolygonSeries extends AbstractSeries<PolygonSeriesProps> {}

export interface VerticalBarSeriesProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
export class VerticalBarSeries extends AbstractSeries<VerticalBarSeriesProps> {}

export interface VerticalBarSeriesCanvasProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
export class VerticalBarSeriesCanvas extends AbstractSeries<VerticalBarSeriesCanvasProps> {}

export interface VerticalGridLinesProps {
    direction?: 'vertical';
    attr?: string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    style?: CSSProperties;
    tickValues?: Array<number | string>;
    tickTotal?: number;
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}

export const VerticalGridLines: SFC<VerticalGridLinesProps>;

export interface VerticalRectSeriesProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
export class VerticalRectSeries extends AbstractSeries<VerticalRectSeriesProps> {}

export interface VerticalRectSeriesCanvasProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
export class VerticalRectSeriesCanvas extends AbstractSeries<VerticalRectSeriesCanvasProps> {}

export interface VoronoiProps {
    className?: string;
    extent?: number[][];
    nodes: VoronoiPoint[];
    onBlur?: RVFocusEventHandler;
    onClick?: RVMouseEventHandler;
    onHover?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    x?: (o: object) => number; // Function;
    y?: (o: object) => number; // Function;
}

export const Voronoi: SFC<VoronoiProps>;

export interface RectSeriesProps extends AbstractSeriesProps<RectSeriesPoint> {
    linePosAttr?: string;
    valuePosAttr?: string;
    lineSizeAttr?: string;
    valueSizeAttr?: string;
}

export class RectSeries extends AbstractSeries<RectSeriesProps> {}

export interface RectSeriesCanvasProps extends AbstractSeriesProps<RectSeriesPoint> {}
export class RectSeriesCanvas extends AbstractSeries<RectSeriesCanvasProps> {}

export interface WhiskerSeriesProps extends AbstractSeriesProps<WhiskerSeriesPoint> {
    strokeWidth?: number;
}

export class WhiskerSeries extends AbstractSeries<WhiskerSeriesProps> {}

export interface XYPlotProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    className?: string;
    dontCheckIfEmpty?: boolean;
    height: number;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: 'x' | 'y' | 'radius' | 'angle' | 'color' | 'fill' | 'stroke' | 'opacity' | 'size';
    style?: CSSProperties;
    width: number;
}

export class XYPlot extends Component<XYPlotProps> {}

export interface XAxisProps {
    orientation?: 'top' | 'bottom';
    attr?: string;
    attrAxis?: string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    title?: string;
    style?: CSSProperties;
    className?: string;
    hideTicks?: boolean;
    hideLine?: boolean;
    on0?: boolean;
    tickLabelAngle?: number;
    tickSize?: number;
    tickSizeInner?: number;
    tickSizeOuter?: number;
    tickPadding?: number;
    tickValues?: Array<number | string>;
    tickFormat?: RVTickFormat;
    tickTotal?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}

export const XAxis: SFC<XAxisProps>;

export interface YAxisProps {
    orientation?: 'left' | 'right';
    attr?: string;
    attrAxis?: string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    title?: string;
    style?: CSSProperties;
    className?: string;
    hideTicks?: boolean;
    hideLine?: boolean;
    on0?: boolean;
    tickLabelAngle?: number;
    tickSize?: number;
    tickSizeInner?: number;
    tickSizeOuter?: number;
    tickPadding?: number;
    tickValues?: Array<number | string>;
    tickFormat?: RVTickFormat;
    tickTotal?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}

export const YAxis: SFC<YAxisProps>;

export interface ContinuousColorLegendProps {
    className?: string;
    height?: number;
    endColor?: string;
    endTitle: number | string;
    midColor?: string;
    midTitle?: number | string;
    startColor?: string;
    startTitle: number | string;
    width?: number;
}

export const ContinuousColorLegend: SFC<ContinuousColorLegendProps>;

export interface ContinuousSizeLegendProps {
    className?: string;
    circlesTotal?: number;
    endSize?: number;
    endTitle: number | string;
    height?: number;
    startSize?: number;
    startTitle: number | string;
    width?: number;
}
export const ContinuousSizeLegend: SFC<ContinuousSizeLegendProps>;

export interface DiscreteColorLegendProps {
    className?: string;
    items: Array<
        | {
              title: string | ReactChild;
              color?: string;
              disabled?: boolean;
          }
        | string
        | ReactChild
    >;
    onItemClick?: RVMouseEventHandler;
    onItemMouseEnter?: RVItemEventHandler;
    onItemMouseLeave?: RVItemEventHandler;
    height?: number;
    width?: number;
    orientation?: 'vertical' | 'horizontal';
}

export const DiscreteColorLegend: SFC<DiscreteColorLegendProps>;

export interface SearchableDiscreteColorLegendProps {
    className?: string;
    items: Array<
        | {
              title: string | ReactChild;
              color?: string;
              disabled?: boolean;
          }
        | string
        | ReactChild
    >;
    onItemClick?: RVMouseEventHandler;
    onItemMouseEnter?: RVItemEventHandler;
    onItemMouseLeave?: RVItemEventHandler;
    height?: number;
    width?: number;
    orientation?: 'vertical' | 'horizontal';
    searchText?: string;
    onSearchChange?: RVSearchChangeEventHandler;
    searchPlaceholder?: string;
    searchFn?: RVSearchFn;
}

export const SearchableDiscreteColorLegend: SFC<SearchableDiscreteColorLegendProps>;

export interface ParallelCoordinatesProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    brushing?: boolean;
    className?: string;
    colorType?: string;
    colorRange?: string[];
    data: ParallelCoordinatesPoint[];
    domains: Array<{
        name: string;
        domain: number[];
        tickFormat?: RVTickFormat;
    }>;
    height: number;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    style?: {
        axes?: CSSProperties;
        labels?: CSSProperties;
        lines?: CSSProperties;
    };
    showMarks?: boolean;
    tickFormat?: RVTickFormat;
    width: number;
}
export class ParallelCoordinates extends Component<ParallelCoordinatesProps> {}

export interface RadarChartProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    className?: string;
    colorType?: string;
    colorRange?: string[];
    data: RadarChartPoint[];
    domains: Array<{
        name: string;
        domain: number[];
        tickFormat?: RVTickFormat;
    }>;
    height: number;
    hideInnerMostValues?: boolean;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    startingAngle?: number;
    style?: {
        axes?: CSSProperties;
        labels?: CSSProperties;
        polygons?: CSSProperties;
    };
    tickFormat?: RVTickFormat;
    width: number;
    renderAxesOverPolygons?: boolean;
    onValueMouseOver?: RVValueEventHandler<RadarChartPoint>;
    onValueMouseOut?: RVValueEventHandler<RadarChartPoint>;
    onSeriesMouseOver?: RVMouseEventHandler;
    onSeriesMouseOut?: RVMouseEventHandler;
}

export const RadarChart: SFC<RadarChartProps>;

export interface RadialChartProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    className?: string;
    colorType?: string;
    data: Array<{
        angle?: number;
        className?: string;
        label?: string;
        radius?: number;
        style?: CSSProperties;
    }>;
    getAngle?: RVGet<RadialChartPoint, 'angle'>;
    getAngle0?: RVGet<RadialChartPoint, 'angle0'>;
    padAngle?: RVPadAngle | number;
    getRadius?: RVGet<RadialChartPoint, 'radius'>;
    getRadius0?: RVGet<RadialChartPoint, 'radius0'>;
    getLabel?: RVGet<RadialChartPoint, 'label'>;
    height: number;
    labelsAboveChildren?: boolean;
    labelsStyle?: CSSProperties;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    onValueClick?: RVValueEventHandler<RadialChartPoint>;
    onValueMouseOver?: RVValueEventHandler<RadialChartPoint>;
    onValueMouseOut?: RVValueEventHandler<RadialChartPoint>;
    showLabels?: boolean;
    style?: CSSProperties;
    // This will need to be revisited when updated in react-vis
    // see https://github.com/uber/react-vis/issues/1211
    subLabel?: (datapoint: object) => string; // Function;
    width: number;
}

export const RadialChart: SFC<RadialChartProps>;

export interface SankeyProps {
    align?: 'justify' | 'left' | 'right' | 'center';
    className?: string;
    hasVoronoi?: boolean;
    height: number;
    hideLabels?: boolean;
    labelRotation?: number;
    layout?: number;
    links: Array<{
        source: number | { [key: string]: any };
        target: number | { [key: string]: any };
    }>;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    nodePadding?: number;
    nodes: SankeyPoint[];
    nodeWidth?: number;
    onValueMouseOver?: RVValueEventHandler<SankeyPoint>;
    onValueClick?: RVValueEventHandler<SankeyPoint>;

    onValueMouseOut?: RVValueEventHandler<SankeyPoint>;
    onLinkClick?: RVValueEventHandler<SankeyPoint>;
    onLinkMouseOver?: RVValueEventHandler<SankeyPoint>;
    onLinkMouseOut?: RVValueEventHandler<SankeyPoint>;
    style?: {
        links?: CSSProperties;
        rects?: CSSProperties;
        labels?: CSSProperties;
    };
    width: number;
}

export const Sankey: SFC<SankeyProps>;

export interface SunburstProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    getAngle?: RVGet<SunburstPoint, 'angle'>;
    getAngle0?: RVGet<SunburstPoint, 'angle0'>;
    className?: string;
    colorType?: string;

    data: SunburstPoint;
    height: number;
    hideRootNode?: boolean;
    getLabel?: RVGet<SunburstPoint, 'label'>;
    onValueClick?: RVValueEventHandler<SunburstPoint>;
    onValueMouseOver?: RVValueEventHandler<SunburstPoint>;
    onValueMouseOut?: RVValueEventHandler<SunburstPoint>;
    getSize?: RVGet<SunburstPoint, 'size'>;
    width: number;
    padAngle?: RVPadAngle | number;
}
export const Sunburst: SFC<SunburstProps>;

export interface TreemapProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    className?: string;
    data?: TreemapPoint;
    height: number;
    hideRootNode?: boolean;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    mode?:
        | 'squarify'
        | 'resquarify'
        | 'slice'
        | 'dice'
        | 'slicedice'
        | 'binary'
        | 'circlePack'
        | 'partition'
        | 'partition-pivot';
    onLeafClick?: RVValueEventHandler<TreemapPoint>;
    onLeafMouseOver?: RVValueEventHandler<TreemapPoint>;
    onLeafMouseOut?: RVValueEventHandler<TreemapPoint>;
    useCirclePacking?: boolean;
    padding?: number;
    sortFunction?: RVSortFn<TreemapPoint>;
    width: number;
    getSize?: RVGet<TreemapPoint, 'size'>;
    getColor?: RVGet<TreemapPoint, 'color'>;
}

export class Treemap extends Component<TreemapProps> {}

export interface FlexibleXYPlotProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    className?: string;
    dontCheckIfEmpty?: boolean;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: 'x' | 'y' | 'radius' | 'angle' | 'color' | 'fill' | 'stroke' | 'opacity' | 'size';
    style?: CSSProperties;
}

export class FlexibleXYPlot extends Component<FlexibleXYPlotProps> {}

export interface FlexibleWidthXYPlotProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    className?: string;
    dontCheckIfEmpty?: boolean;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: 'x' | 'y' | 'radius' | 'angle' | 'color' | 'fill' | 'stroke' | 'opacity' | 'size';
    style?: CSSProperties;
}

export class FlexibleWidthXYPlot extends Component<FlexibleWidthXYPlotProps> {}

export interface FlexibleHeightXYPlotProps {
    animation?:
        | string
        | {
              stiffness?: number;
              nonAnimatedProps?: string[];
              damping?: number;
          }
        | boolean;
    className?: string;
    dontCheckIfEmpty?: boolean;
    margin?:
        | {
              left?: number;
              top?: number;
              right?: number;
              bottom?: number;
          }
        | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: 'x' | 'y' | 'radius' | 'angle' | 'color' | 'fill' | 'stroke' | 'opacity' | 'size';
    style?: CSSProperties;
}

export class FlexibleHeightXYPlot extends Component<FlexibleHeightXYPlotProps> {}
