import EventEmitter from './core/events';
import { render } from './core/render';
import { Context } from './core/context';
import { IHiComponent } from './types/index';
import dom, { Fragment } from './core/dom/dom';

class HiComponent implements IHiComponent {
    static EventEmitter = EventEmitter;
    static dom = dom;
    static Fragment = Fragment;

    context: Context;
    eventBus: EventEmitter;
    private static cid = 0;

    constructor() {
        console.log('constructor6666');
        this.context = new Context();
        this.eventBus = new EventEmitter();
        this._init();
    }

    render = render;

    private _init() {
        this.eventBus.on('context:mounted', (data: { parent: any }) => {
            console.log('context:mounted', data);
            // this._flush();
            const component: { parent: any } = { parent: data.parent };
            this.context.components[HiComponent.cid++] = component;
        });
    }

    private _flush() {
        // Implement flush logic here
    }
}

export default HiComponent;
