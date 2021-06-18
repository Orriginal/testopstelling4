import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';
import classNames                                from 'classnames';

/**
 * Description a-button
 * @design https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary
 * @design https://bouw7.invisionapp.com/console/Aphrodite---Elements-ckki47nfp0wxp0177eesobx7y/ckltf4w28050c01284cc9fa3g/play
 * @slot default - The default content
 */
@Component({
    tag     : 'a-button',
    styleUrl: 'a-button.scss',
    shadow  : true,
})
export class AButton
{
    /**
     * Dit is een description
     */
    @Prop() color?: 'primary' | 'secondary'     = 'primary';
    @Prop({reflect: true}) disabled?: boolean   = false;
    @Prop({reflect: true}) elevation?: boolean  = false;
    @Prop() shape?: 'full' | 'round' | 'smooth' = 'smooth';
    @Prop() size?: 'large' | 'medium' | 'small' = 'medium';

    @Event() evClick: EventEmitter;

    handleClick(event: UIEvent)
    {
        this.evClick.emit(event);
    }

    render()
    {
        return (
            <div>
                <button
                    class={classNames('MyButton', this.color, this.shape, this.size, {elevation: this.elevation})}
                    disabled={this.disabled}
                    onClick={this.handleClick.bind(this)}
                >
                    <slot>Default</slot>
                </button>
            </div>
        );
    }
}
