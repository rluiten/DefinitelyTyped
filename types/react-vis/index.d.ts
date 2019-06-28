// Type definitions for react-vis 1.11.7
// Project: https://github.com/uber/react-vis
// Definitions by: Tyler Miller <https://github.com/fstylermiller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5
declare module 'react-vis' {
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

    interface AbstractSeriesPoint {
        [key: string]: any;
    }

    type RVMouseEventHandler = MouseEventHandler<HTMLElement>;
    type RVTouchEventHandler = TouchEventHandler<HTMLElement>;
    type RVWheelEventHandler = WheelEventHandler<HTMLElement>;
    type RVFocusEventHandler = FocusEventHandler<HTMLElement>;

    type RVBrushEventHandler = (e?: { left: number; top: number; right: number; bottom: number }) => void;

    type RVSearchChangeEventHandler = (value: string) => void;

    type RVItemEventHandler = (item: any, index: number, event: MouseEvent<HTMLElement>) => void;

    type RVValueEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, event: MouseEvent<HTMLElement>) => void;

    type RVNearestXData<T extends AbstractSeriesPoint> = {
        event: MouseEvent<HTMLElement>;
        innerX: T['x'];
        index: number;
    };

    type RVNearestXEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXData<T>) => void;

    type RVNearestXYData<T extends AbstractSeriesPoint> = {
        event: MouseEvent<HTMLElement>;
        innerX: T['x'];
        innerY: T['y'];
        index: number;
    };

    type RVNearestXYEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXYData<T>) => void;

    type RVGet<T extends AbstractSeriesPoint, K extends keyof T> = (datapoint: T) => T[K];
    type RVGetNull<T extends AbstractSeriesPoint> = (datapoint: T) => any;
    type RVGetAlignStyle = (align: { horizontal: string; vertical: string }, x: number, y: number) => CSSProperties;

    type RVTickFormat = (tick: any) => string;

    type RVItemsFormat = (values: any[]) => Array<{ value: any; title: any }>;
    type RVTitleFormat = (values: any[]) => { value: any; title: any } | undefined;

    type RVHintFormat = (value: { [key: string]: any }) => Array<{ value: any; title: any }>;

    type RVPadAngle = (...args: any[]) => number | undefined;

    type RVSearchFn = (items: any[], searchText: string) => any[];

    type RVSortFn<T extends AbstractSeriesPoint> = (a: T, b: T, accessor: (val: T) => number) => number;

    interface LineSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
        color?: string | number;
    }

    interface LineMarkSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        y: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
        size?: string | number;
    }

    interface MarkSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        y: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
        size?: string | number;
    }

    interface HorizontalBarSeriesPoint extends AbstractSeriesPoint {
        x: string | number;
        y: string | number;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }

    interface VerticalBarSeriesPoint extends AbstractSeriesPoint {
        x: string | number;
        y: number;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }

    interface ArcSeriesPoint extends AbstractSeriesPoint {
        angle0: number;
        angle: number;
        radius0: number;
        radius: number;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }

    interface AreaSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
        y0?: number;
    }

    interface ContourSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    interface HeatmapSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
        color?: string | number;
    }

    interface LabelSeriesPoint extends AbstractSeriesPoint {
        x: string | number;
        y: string | number;
        label: string;
        xOffset?: number;
        yOffset?: number;
        rotation?: number;
        style?: CSSProperties;
    }

    interface CustomSVGSeriesPoint extends AbstractSeriesPoint {
        x: string | number;
        y: string | number;
    }

    interface PolygonSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    interface RectSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        x0: string | number | Date;
        y: string | number | Date;
        y0: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }

    type HorizontalRectSeriesPoint = RectSeriesPoint;
    type VerticalRectSeriesPoint = RectSeriesPoint;

    interface WhiskerSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        y: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        size?: string | number;
        xVariance?: string | number;
        yVariance?: string | number;
    }

    interface TreemapPoint extends AbstractSeriesPoint {
        title: string;
        size: number;
        opacity?: number;
        color?: string | number;
        style: CSSProperties;
        children: TreemapPoint[];
    }

    interface ParallelCoordinatesPoint extends AbstractSeriesPoint {
        [key: string]: number;
    }

    interface RadialChartPoint extends AbstractSeriesPoint {
        angle: number;
        radius?: number;
        label?: string;
        subLabel?: string;
        color?: string;
        style?: object;
        className?: string;
    }

    interface SankeyPoint extends AbstractSeriesPoint {
        name: string;
        color?: string;
        opacity?: number;
        key?: string;
    }

    interface SunburstPoint extends AbstractSeriesPoint {
        title: string;
        size: number;
        color?: number;
        label?: string;
        labelStyle?: CSSProperties;
        dontRotateLabel?: boolean;
        children?: SunburstPoint[];
    }

    interface VoronoiPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    interface HexbinSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    interface DecorativeAxisPoint extends AbstractSeriesPoint {}
    interface RadarChartPoint extends AbstractSeriesPoint {}
    interface HighlightPoint extends AbstractSeriesPoint {}

    function makeVisFlexible<T>(
        component: ComponentType<T>
    ): ComponentType<Pick<T, Exclude<keyof T, 'width' | 'height'>>>;

    function makeHeightFlexible<T>(component: ComponentType<T>): ComponentType<Pick<T, Exclude<keyof T, 'height'>>>;

    function makeWidthFlexible<T>(component: ComponentType<T>): ComponentType<Pick<T, Exclude<keyof T, 'width'>>>;

    const AxisUtils: {
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
            scale: Function,
            tickTotal: number,
            tickValues?: Array<number | string>
        ) => Array<number | string>;
    };

    const ScaleUtils: {
        extractScalePropsFromProps: (
            props: AbstractSeriesProps<AbstractSeriesPoint>,
            attributes: string[]
        ) => { [key: string]: any };
        getAttributeScale: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
        getAttributeFunctor: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
        getAttr0Functor: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
        getAttributeValue: (props: AbstractSeriesProps<AbstractSeriesPoint>, attr: string) => any;
        getDomainByAccessor: (allData: any[], accessor: Function, accessor0: Function, type: string) => any[];
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

    interface AbstractSeriesProps<T extends AbstractSeriesPoint> {
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

    class AbstractSeries<T> extends PureComponent<T> {}

    interface ArcSeriesProps extends AbstractSeriesProps<ArcSeriesPoint> {
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

    class ArcSeries extends AbstractSeries<ArcSeriesProps> {}

    interface AreaSeriesProps extends AbstractSeriesProps<AreaSeriesPoint> {
        getNull?: RVGetNull<AreaSeriesPoint>;
    }

    class AreaSeries extends AbstractSeries<AreaSeriesProps> {}

    interface BordersProps {
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

    const Borders: SFC<BordersProps>;

    interface ChartLabelProps {
        className?: string;
        includeMargin?: boolean;
        style?: CSSProperties;
        text?: string;
        xPercent?: number;
        yPercent?: number;
    }

    class ChartLabel extends PureComponent<ChartLabelProps> {}

    interface CircularGridLinesProps {
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

    class CircularGridLines extends PureComponent<CircularGridLinesProps> {}

    interface ContourSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
        bandwidth?: number;
        className?: string;
        marginLeft?: number;
        marginTop?: number;
    }

    class ContourSeries extends AbstractSeries<ContourSeriesProps> {}

    interface CrosshairProps {
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

    class Crosshair extends PureComponent<CrosshairProps> {}

    interface CustomSVGSeriesProps extends AbstractSeriesProps<CustomSVGSeriesPoint> {
        className?: string;
        customComponent?: string | Function;
        marginLeft?: number;
        marginTop?: number;
        size?: number;
    }

    class CustomSVGSeries extends AbstractSeries<CustomSVGSeriesProps> {}

    interface DecorativeAxisProps extends AbstractSeriesProps<DecorativeAxisPoint> {
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

    class DecorativeAxis extends AbstractSeries<DecorativeAxisProps> {}

    interface GradientDefsProps {
        className?: string;
    }

    const GradientDefs: SFC<GradientDefsProps>;

    interface GridLinesProps {
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

    class GridLines extends PureComponent<GridLinesProps> {}

    interface HeatmapSeriesProps extends AbstractSeriesProps<HeatmapSeriesPoint> {}
    class HeatmapSeries extends AbstractSeries<HeatmapSeriesProps> {}

    interface HexbinSeriesProps extends AbstractSeriesProps<HexbinSeriesPoint> {
        radius?: number;
    }

    class HexbinSeries extends AbstractSeries<HexbinSeriesProps> {}

    interface HighlightProps extends AbstractSeriesProps<HighlightPoint> {
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

    class Highlight extends AbstractSeries<HighlightProps> {}

    interface HintProps {
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

    class Hint extends PureComponent<HintProps> {}

    interface HorizontalBarSeriesProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
    class HorizontalBarSeries extends AbstractSeries<HorizontalBarSeriesProps> {}

    interface HorizontalBarSeriesCanvasProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
    class HorizontalBarSeriesCanvas extends AbstractSeries<HorizontalBarSeriesCanvasProps> {}

    interface HorizontalGridLinesProps {
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

    const HorizontalGridLines: SFC<HorizontalGridLinesProps>;

    interface HorizontalRectSeriesProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
    class HorizontalRectSeries extends AbstractSeries<HorizontalRectSeriesProps> {}

    interface HorizontalRectSeriesCanvasProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
    class HorizontalRectSeriesCanvas extends AbstractSeries<HorizontalRectSeriesCanvasProps> {}

    interface LabelSeriesProps extends AbstractSeriesProps<LabelSeriesPoint> {
        allowOffsetToBeReversed?: boolean;
        className?: string;
        marginLeft?: number;
        marginTop?: number;
        rotation?: number;
        labelAnchorX?: string;
        labelAnchorY?: string;
    }

    class LabelSeries extends AbstractSeries<LabelSeriesProps> {}

    interface LineMarkSeriesProps extends AbstractSeriesProps<LineMarkSeriesPoint> {
        strokeStyle?: 'dashed' | 'solid';
        curve?: string | Function;
        getNull?: RVGetNull<LineMarkSeriesPoint>;
        lineStyle?: CSSProperties;
        markStyle?: CSSProperties;
    }

    class LineMarkSeries extends AbstractSeries<LineMarkSeriesProps> {}

    interface LineMarkSeriesCanvasProps extends AbstractSeriesProps<LineMarkSeriesPoint> {}

    class LineMarkSeriesCanvas extends AbstractSeries<LineMarkSeriesCanvasProps> {}

    interface LineSeriesProps extends AbstractSeriesProps<LineSeriesPoint> {
        strokeStyle?: 'dashed' | 'solid';
        curve?: string | Function;
        getNull?: RVGetNull<LineSeriesPoint>;
    }

    class LineSeries extends AbstractSeries<LineSeriesProps> {}

    interface LineSeriesCanvasProps extends AbstractSeriesProps<LineSeriesPoint> {
        strokeWidth?: number;
    }
    class LineSeriesCanvas extends AbstractSeries<LineSeriesCanvasProps> {}

    interface MarkSeriesProps extends AbstractSeriesProps<MarkSeriesPoint> {
        getNull?: RVGetNull<MarkSeriesPoint>;
        strokeWidth?: number;
    }

    class MarkSeries extends AbstractSeries<MarkSeriesProps> {}

    interface MarkSeriesCanvasProps extends AbstractSeriesProps<MarkSeriesPoint> {}
    class MarkSeriesCanvas extends AbstractSeries<MarkSeriesCanvasProps> {}

    interface PolygonSeriesProps extends AbstractSeriesProps<PolygonSeriesPoint> {}
    class PolygonSeries extends AbstractSeries<PolygonSeriesProps> {}

    interface VerticalBarSeriesProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
    class VerticalBarSeries extends AbstractSeries<VerticalBarSeriesProps> {}

    interface VerticalBarSeriesCanvasProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
    class VerticalBarSeriesCanvas extends AbstractSeries<VerticalBarSeriesCanvasProps> {}

    interface VerticalGridLinesProps {
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

    const VerticalGridLines: SFC<VerticalGridLinesProps>;

    interface VerticalRectSeriesProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
    class VerticalRectSeries extends AbstractSeries<VerticalRectSeriesProps> {}

    interface VerticalRectSeriesCanvasProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
    class VerticalRectSeriesCanvas extends AbstractSeries<VerticalRectSeriesCanvasProps> {}

    interface VoronoiProps {
        className?: string;
        extent?: Array<number[]>;
        nodes: VoronoiPoint[];
        onBlur?: RVFocusEventHandler;
        onClick?: RVMouseEventHandler;
        onHover?: RVMouseEventHandler;
        onMouseDown?: RVMouseEventHandler;
        onMouseUp?: RVMouseEventHandler;
        x?: Function;
        y?: Function;
    }

    const Voronoi: SFC<VoronoiProps>;

    interface RectSeriesProps extends AbstractSeriesProps<RectSeriesPoint> {
        linePosAttr?: string;
        valuePosAttr?: string;
        lineSizeAttr?: string;
        valueSizeAttr?: string;
    }

    class RectSeries extends AbstractSeries<RectSeriesProps> {}

    interface RectSeriesCanvasProps extends AbstractSeriesProps<RectSeriesPoint> {}
    class RectSeriesCanvas extends AbstractSeries<RectSeriesCanvasProps> {}

    interface WhiskerSeriesProps extends AbstractSeriesProps<WhiskerSeriesPoint> {
        strokeWidth?: number;
    }

    class WhiskerSeries extends AbstractSeries<WhiskerSeriesProps> {}

    interface XYPlotProps {
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

    class XYPlot extends Component<XYPlotProps> {}

    interface XAxisProps {
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

    const XAxis: SFC<XAxisProps>;

    interface YAxisProps {
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

    const YAxis: SFC<YAxisProps>;

    interface ContinuousColorLegendProps {
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

    const ContinuousColorLegend: SFC<ContinuousColorLegendProps>;

    interface ContinuousSizeLegendProps {
        className?: string;
        circlesTotal?: number;
        endSize?: number;
        endTitle: number | string;
        height?: number;
        startSize?: number;
        startTitle: number | string;
        width?: number;
    }
    const ContinuousSizeLegend: SFC<ContinuousSizeLegendProps>;

    interface DiscreteColorLegendProps {
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

    const DiscreteColorLegend: SFC<DiscreteColorLegendProps>;

    interface SearchableDiscreteColorLegendProps {
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

    const SearchableDiscreteColorLegend: SFC<SearchableDiscreteColorLegendProps>;

    interface ParallelCoordinatesProps {
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
    class ParallelCoordinates extends Component<ParallelCoordinatesProps> {}

    interface RadarChartProps {
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

    const RadarChart: SFC<RadarChartProps>;

    interface RadialChartProps {
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
        subLabel?: Function;
        width: number;
    }

    const RadialChart: SFC<RadialChartProps>;

    interface SankeyProps {
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

    const Sankey: SFC<SankeyProps>;

    interface SunburstProps {
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
    const Sunburst: SFC<SunburstProps>;

    interface TreemapProps {
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

    class Treemap extends Component<TreemapProps> {}

    interface FlexibleXYPlotProps {
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

    class FlexibleXYPlot extends Component<FlexibleXYPlotProps> {}

    interface FlexibleWidthXYPlotProps {
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

    class FlexibleWidthXYPlot extends Component<FlexibleWidthXYPlotProps> {}

    interface FlexibleHeightXYPlotProps {
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

    class FlexibleHeightXYPlot extends Component<FlexibleHeightXYPlotProps> {}
}
