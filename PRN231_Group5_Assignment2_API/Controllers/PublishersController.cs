using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PRN231_Group5_Assignment1_Repo.Interfaces;
using PRN231_Group5_Assignment1_Repo.Models;
using PRN231_Group5_Assignment1_Repo.ViewModels.Book;
using PRN231_Group5_Assignment1_Repo.ViewModels.Publisher;

namespace PRN231_Group5_Assignment2_API.Controllers
{
    public class PublishersController : BaseController
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public PublishersController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        // GET: api/publishers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Publisher>>> GetPublishers(

            [FromQuery] int? pageIndex = null,

           [FromQuery] int? pageSize = null
        )
        {
            var publishers = await _unitOfWork.PublisherRepository.GetAsync(
                pageIndex: pageIndex,
                pageSize: pageSize
            );
            var publisherViewModel = _mapper.Map<IEnumerable<Publisher>>(publishers);
            return Ok(publisherViewModel);
        }

        // GET: api/Publisher/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Publisher>> GetPublisher(int id)
        {
            var publisher = await _unitOfWork.PublisherRepository.GetByIDAsync(id);

            if (publisher == null)
            {
                return NotFound();
            }

            return publisher;
        }

        // POST: api/Publishers
        [HttpPost]
        public async Task<ActionResult<Publisher>> CreatePublisher(CreatePublisherViewModel createModel)
        {
            var publisher = _mapper.Map<Publisher>(createModel);
            _unitOfWork.PublisherRepository.Insert(publisher);
            _unitOfWork.Save();
            return CreatedAtAction(nameof(GetPublisher), new { id = publisher.PublisherId }, publisher);
        }

        // PUT: api/Publisher/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePublisher(int id, [FromBody] UpdatePublisherViewModel updateViewModel)
        {
            var publisherExisted = await _unitOfWork.PublisherRepository.GetByIDAsync(id);
            if (publisherExisted == null)
            {
                return NotFound();
            }
            _mapper.Map(updateViewModel, publisherExisted);
            _unitOfWork.PublisherRepository.Update(publisherExisted);
            _unitOfWork.Save();
            return NoContent();
        }

        // DELETE: api/Publisher/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublisher(int id)
        {
            var publisher = await _unitOfWork.PublisherRepository.GetByIDAsync(id);
            if (publisher == null)
            {
                return NotFound();
            }
            _unitOfWork.BookRepository.Delete(publisher);
            _unitOfWork.Save();
            return NoContent();
        }
    }
}
