using AutoMapper;
using PRN231_Group5_Assignment1_Repo.Models;
using PRN231_Group5_Assignment1_Repo.ViewModels.Book;
using PRN231_Group5_Assignment1_Repo.ViewModels.Publisher;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRN231_Group5_Assignment1_Repo.Mappers
{
    public class MapperConfigurationsProfile : Profile
    {
        public MapperConfigurationsProfile()
        {
            CreateMap<CreateBookViewModel, Book>();
            CreateMap<UpdateBookViewModel, Book>();
            CreateMap<Book, BookViewModel>();

            CreateMap<CreatePublisherViewModel, Publisher>().ReverseMap();
            CreateMap<UpdatePublisherViewModel, Publisher>().ReverseMap();
        }
    }
}
