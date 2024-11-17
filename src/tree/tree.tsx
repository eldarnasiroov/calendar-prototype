import React, { useRef, useState } from 'react';

import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HEIGHT } from './common/constants';
import { Folder } from './common/folder';
import { ITreeNodeProps, ITreeProps } from './common/types';

import './tree.scss';

// Компонент для одного узла дерева
const TreeNode: React.FC<ITreeNodeProps> = ({ node, depth, scroll, open }) => {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = node.children && node.children.length > 0;
    const isParentNode = depth === 1;

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
        scroll();
    };

    return (
        <div
            className={`tree-node ${isParentNode && 'tree-node__parent'} ${
                (depth !== 1 && !isOpen) || (isParentNode && !isOpen)
                    ? 'overflow_hidden'
                    : 'overflow_visible'
            }`}
        >
            <div
                className="tree-node__wrapper"
                onClick={hasChildren ? toggleOpen : () => {}}
                style={{
                    width: open || isParentNode ? '100%' : '0px',
                    height: open || isParentNode ? HEIGHT + 'px' : '0px',
                }}
            >
                <div className="tree-node__info">
                    <div className="tree-node__icon-wrapper">
                        <div className="tree-node__icon">
                            <Folder />
                        </div>
                        <p className='tree-node__count'>57</p>
                        <p className='tree-node__type'>Бригада</p>
                        <img
                            className="tree-node__image"
                            width={65}
                            height={65}
                            src={
                                'no_image_worker.svg'
                            }
                            alt=""
                        />
                    </div>

                    <div className="tree-node__label">
                        <p style={{ margin: '0px', fontWeight: 'bold' }}>Название бригады</p>
                        <p style={{ margin: '0px' }}>Должность бригадира / Имя Ф.</p>
                    </div>
                </div>

                {hasChildren && (
                    <FontAwesomeIcon
                        icon={isOpen ? faChevronDown : faChevronRight}
                        size="3x"
                        color="#9538EE"
                    />
                )}
            </div>

            {hasChildren && (
                <div
                    style={{
                        width: '100%',
                        transition: 'all 0.3s ease',

                        height: isOpen ? 'auto' : '0px',
                        minHeight: isOpen ? (node.children?.length ?? 1) * HEIGHT + 'px' : '0px',
                        opacity: isOpen ? 1 : 0,
                    }}
                >
                    {node.children?.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            depth={depth + 1}
                            scroll={scroll}
                            open={isOpen}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Основной компонент Tree
export const Tree: React.FC<ITreeProps> = ({ nodes }) => {
    const ref = useRef(null);

    const handleScroll = () => {
        if (!ref.current) return;

        setTimeout(() => {
            ref.current.scrollTo({
                left: ref.current.scrollWidth,
                behavior: 'smooth',
            });
        }, 100);
    };

    return (
        <div ref={ref} className="tree-wrapper">
            <div className="tree-wrapper__nodes">
                {nodes.map((node) => (
                    <TreeNode
                        key={node.id}
                        node={node}
                        depth={1}
                        scroll={handleScroll}
                        open={false}
                    />
                ))}
            </div>
        </div>
    );
};
