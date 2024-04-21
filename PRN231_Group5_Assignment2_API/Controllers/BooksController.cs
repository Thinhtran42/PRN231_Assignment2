using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PRN231_Group5_Assignment1_Repo.Interfaces;
using PRN231_Group5_Assignment1_Repo.Models;
using PRN231_Group5_Assignment1_Repo.ViewModels.Book;

namespace PRN231_Group5_Assignment2_API.Controllers
{
    public class BooksController : BaseController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BooksController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks(
            [FromQuery] int? pageIndex = null,
            [FromQuery] int? pageSize = null
        )
        {
            var books = await _unitOfWork.BookRepository.GetAsync(
                orderBy: q => q.OrderBy(b => b.PublishedDate),
                pageIndex: pageIndex,
                pageSize: pageSize
            );
            var bookViewModel = _mapper.Map<IEnumerable<BookViewModel>>(books);
            return Ok(bookViewModel);
        }

        // GET: api/Books/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _unitOfWork.BookRepository.GetByIDAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        // POST: api/Books
        [HttpPost]
        public async Task<ActionResult<Book>> CreateBook(CreateBookViewModel createModel)
        {
            var book = _mapper.Map<Book>(createModel);
            _unitOfWork.BookRepository.Insert(book);
            _unitOfWork.Save();
            return CreatedAtAction(nameof(GetBook), new { id = book.BookId }, book);
        }

        // PUT: api/Books/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(int id, [FromBody] UpdateBookViewModel updateViewModel)
        {
            var bookExisted = await _unitOfWork.BookRepository.GetByIDAsync(id);
            if (bookExisted == null)
            {
                return NotFound();
            }
            _mapper.Map(updateViewModel, bookExisted);
            _unitOfWork.BookRepository.Update(bookExisted);
            _unitOfWork.Save();
            return NoContent();
        }

        // DELETE: api/Books/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _unitOfWork.BookRepository.GetByIDAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            _unitOfWork.BookRepository.Delete(book);
            _unitOfWork.Save();
            return NoContent();
        }
    }
}