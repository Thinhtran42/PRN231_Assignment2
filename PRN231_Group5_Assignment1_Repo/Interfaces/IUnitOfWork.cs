using AutoMapper.Execution;
using PRN231_Group5_Assignment1_Repo.Models;
using PRN231_Group5_Assignment1_Repo.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.Interfaces
{
    public interface IUnitOfWork
    {
        GenericRepository<Author> AuthorRepository { get; }
        GenericRepository<Book> BookRepository { get; }
        GenericRepository<BookAuthor> BookAuthorRepository { get; }
        GenericRepository<Publisher> PublisherRepository { get; }
        GenericRepository<User> UserRepository { get; }
        GenericRepository<Role> RoleRepository { get; }
        void Save();
    }
}
