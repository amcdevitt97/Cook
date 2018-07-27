
import * as React       from 'react';

/*--------------------------------------------------------------------
Interfaces
----------------------------------------------------------------------*/

const foodItemProps = {
  title:'',
  image:''
}

export class FoodItem extends React.Component{

    // Constructor
    constructor(props) {
        super(props);
    }

    // Public Methods

    render() {
        const props = this.props;
        let title = props.title;
        let image = props.image;

        return (
            <div className='foodItem' >
                <img src={ image } alt={ title } className='foodItemImage' />
                <div className='foodItemTitle'> {title} </div>
            </div>
        );
    }
}

export default FoodItem;