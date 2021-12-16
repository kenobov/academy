import React from 'react';
import './FolderComponent.scss';

import opener from '../../assets/angle.png';
import folder from '../../assets/folder.png';
import folderFull from '../../assets/folderfull.png';
import ucFirst from "../helpers/ucFirst";

export default class FolderComponent extends React.Component {

    state = {
        isOpened: false
    }

    cbSelect = () => {
        this.props.selectFolder(this.props.name, this.props.files);
    }

    cbOpen = (e) => {
        e.stopPropagation();
        this.setState(prevState => {
            return {
                isOpened: !prevState.isOpened
            }
        });
    }

    render() {
        const {isOpened} = this.state;
        const {level, name, isSelected, children} = this.props;

        return (
            <div className="FolderComponent">
                <div className="folder" onClick={this.cbSelect}>
                    <div className={`name ${isSelected ? 'active' : ''}`}
                         style={{paddingLeft: `${25 * level}px`}}>
                        <div className={`opener ${isOpened ? 'opened' : ''}`}
                            onClick={this.cbOpen}
                        >
                            {
                                children ? <img src={opener} /> : null
                            }
                        </div>
                        <div className="image">
                            <img src={this.props.files.length > 0 ? folderFull : folder} />
                        </div>
                        {
                            ucFirst(name)
                        }
                    </div>
                </div>
                <div className={`children ${isOpened ? 'show' : ''}`}>
                    {
                        children
                    }
                </div>
            </div>
        )
    }

}