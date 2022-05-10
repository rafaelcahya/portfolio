import moment from 'moment';
import React, { Component } from 'react';

export default class Github extends Component {
    
    constructor() {
        super();
        this.state = {
            commits: [],
            currentPage: 1,
            todosPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/rafaelcahya/Codingcom-V2/commits')
            .then((response) => response.json())
            .then(commitsList => {
                this.setState({ commits: commitsList })
        });
    }
    
    render() {
        const { commits, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = commits.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((commit, index) => {
            return <div key={index} className='jakarta-200 text-[14px]'>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-1'>
                        <p className='jakarta-500'>{commit.commit.committer.name}</p>
                        <div className='flex gap-1'>
                            <p className=''>committed on {moment(commit.commit.committer.date).format('lll')}</p>
                        </div>
                    </div>
                    <p className='bg-white dark:bg-[#282a2f] rounded-md p-3'>{commit.commit.message}</p>
                </div>
            </div>
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(commits.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <button key={number} id={number} onClick={this.handleClick} className=" hover:bg-[#181818] duration-200 active:bg-violet-700 focus:ring focus:ring-violet-300 jakarta text-[14px] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    {number}
                </button>
            );
        });
        return (
            <>
                <div className='flex flex-col gap-12 text-[#282a2f] dark:text-[#cccbcb] duration-200 tracking-wider'>
                    {renderTodos}
                    <div className='flex justify-center gap-5'>
                        {renderPageNumbers}
                    </div>
                </div>
            </>
        )
    }
}