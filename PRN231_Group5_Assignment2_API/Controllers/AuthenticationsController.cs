using AutoMapper;
using PRN231_Group5_Assignment1_Repo.Interfaces;

namespace PRN231_Group5_Assignment2_API.Controllers
{
    public class AuthenticationsController : BaseController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AuthenticationsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
    }
}