import React from 'react';

import FolderComponent from "../FolderComponent/FolderComponent";

import './MainComponent.scss';
import data from '../data.json';
import FileComponent from "../FileComponent/FileComponent";

export default class MainComponent extends React.Component {

    state = {
        data: data, // Массив всех данных
        files: [], // Массив файлов папки для отображения
        selected: null // Выбранная папка, уникальное имя
    }

    cbSelectFolder = (selected, files) => {
        this.setState({
            selected, files
        })
    }

    renderFolders = (folders, level) => {
        return folders.map(folder => {
            const chFiles = folder.children.filter(t=>t.type==='FILE');
            const chFolders = folder.children.filter(t=>t.type==='FOLDER');

            return <FolderComponent name={folder.name}
                                    files={chFiles}
                                    key={folder.name}
                                    level={level}
                                    isSelected={folder.name === this.state.selected}
                                    selectFolder={this.cbSelectFolder}
            >
                {
                    (chFolders && chFolders.length > 0)
                        ? this.renderFolders(chFolders, level+1)
                        : null
                }
            </FolderComponent>
        })
    }

    render() {
        const {data, files, selected} = this.state;

        return (
            <div className="MainComponent">
                <div className="folders">
                    {
                        this.renderFolders(data, 1)
                    }
                </div>
                <div className="files">
                    <FileComponent files={files} folder={selected}/>
                </div>
            </div>
        )
    }

}
