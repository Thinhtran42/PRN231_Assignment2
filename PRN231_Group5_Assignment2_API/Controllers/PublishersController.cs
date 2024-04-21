using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PRN231_Group5_Assignment1_Repo.Interfaces;
using PRN231_Group5_Assignment1_Repo.Models;

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
        public async Task<ActionResult<IEnumerable<Publisher>>> GetPublishers()
        {
            var publishers = await _unitOfWork.PublisherRepository.GetAsync();

            if (publishers == null || !publishers.Any())
            {
                return NotFound();
            }
            return Ok(publishers);
        }

    }
}
