using AutoMapper.Execution;
using PRN231_Group5_Assignment1_Repo.Interfaces;
using PRN231_Group5_Assignment1_Repo.Models;
using PRN231_Group5_Assignment1_Repo.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly BookStoreContext _context;
        private GenericRepository<Author> authorRepository;
        private GenericRepository<Book> bookRepository;
        private GenericRepository<BookAuthor> bookAuthorRepository;
        private GenericRepository<Publisher> publisherRepository;
        private GenericRepository<Role> roleRepository;
        private GenericRepository<User> userRepository;

        public UnitOfWork(BookStoreContext context)
        {
            _context = context;
        }

        private bool disposed = false;

        public GenericRepository<Author> AuthorRepository
        {
            get
            {
                if (authorRepository == null)
                {
                    authorRepository = new GenericRepository<Author>(_context);
                }
                return authorRepository;
            }
        }

        public GenericRepository<Book> BookRepository
        {
            get
            {
                if (bookRepository == null)
                {
                    bookRepository = new GenericRepository<Book>(_context);
                }
                return bookRepository;
            }
        }

        public GenericRepository<BookAuthor> BookAuthorRepository
        {
            get
            {
                if (bookAuthorRepository == null)
                {
                    bookAuthorRepository = new GenericRepository<BookAuthor>(_context);
                }
                return bookAuthorRepository;
            }
        }

        public GenericRepository<Publisher> PublisherRepository
        {
            get
            {
                if (publisherRepository == null)
                {
                    publisherRepository = new GenericRepository<Publisher>(_context);
                }
                return publisherRepository;
            }
        }

        public GenericRepository<Role> RoleRepository
        {
            get
            {
                if (roleRepository == null)
                {
                    roleRepository = new GenericRepository<Role>(_context);
                }
                return roleRepository;
            }
        }

        public GenericRepository<User> UserRepository
        {
            get
            {
                if (userRepository == null)
                {
                    userRepository = new GenericRepository<User>(_context);
                }
                return userRepository;
            }
        }


        public void Save()
        {
            _context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
