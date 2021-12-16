import React from 'react';
import './FileComponent.scss';
import image from '../../assets/file.png';
import ucFirst from "../helpers/ucFirst";

export default class FileComponent extends React.Component {

    render() {
        const {files, folder} = this.props;
        console.log(this.props)

        return (
            <div className="FileComponent">
                {
                    folder ?
                        <div className="folder">
                            Папка: <b>{ucFirst(folder)}</b>
                        </div> : null
                }
                {
                    files && files.length > 0 ?
                        files.map(file => {
                            return <div className="file" key={file.name}>
                                <div className="image">
                                    <img src={image} />
                                </div>
                                <div className="name">
                                    {
                                        ucFirst(file.name)
                                    }
                                </div>
                            </div>
                        })
                        : <div className="noData">
                            В данной папке нет файлов
                        </div>
                }
            </div>
        )
    }

}