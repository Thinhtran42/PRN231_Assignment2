USE [master]
GO
/****** Object:  Database [BookStore]    Script Date: 21/04/2024 07:38:29 ******/
CREATE DATABASE [BookStore]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BookStore', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\BookStore.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BookStore_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\BookStore_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [BookStore] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BookStore].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BookStore] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BookStore] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BookStore] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BookStore] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BookStore] SET ARITHABORT OFF 
GO
ALTER DATABASE [BookStore] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [BookStore] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BookStore] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BookStore] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BookStore] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BookStore] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BookStore] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BookStore] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BookStore] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BookStore] SET  ENABLE_BROKER 
GO
ALTER DATABASE [BookStore] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BookStore] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BookStore] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BookStore] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BookStore] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BookStore] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BookStore] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BookStore] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BookStore] SET  MULTI_USER 
GO
ALTER DATABASE [BookStore] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BookStore] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BookStore] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BookStore] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BookStore] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BookStore] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [BookStore] SET QUERY_STORE = OFF
GO
USE [BookStore]
GO
/****** Object:  Table [dbo].[Author]    Script Date: 21/04/2024 07:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Author](
	[AuthorId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[Phone] [nvarchar](20) NULL,
	[Address] [nvarchar](200) NULL,
	[City] [nvarchar](100) NULL,
	[State] [nvarchar](50) NULL,
	[Zip] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[AuthorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Book]    Script Date: 21/04/2024 07:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Book](
	[BookId] [int] IDENTITY(1,1) NOT NULL,
	[Pub_Id] [int] NULL,
	[Title] [nvarchar](200) NULL,
	[Type] [nvarchar](100) NULL,
	[Price] [decimal](10, 2) NULL,
	[Advance] [decimal](10, 2) NULL,
	[Royalty] [decimal](5, 2) NULL,
	[YtdSale] [int] NULL,
	[Notes] [nvarchar](max) NULL,
	[Published_Date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[BookId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BookAuthor]    Script Date: 21/04/2024 07:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookAuthor](
	[AuthorId] [int] NULL,
	[Book_Id] [int] NULL,
	[Author_Order] [int] NULL,
	[Royality_Percentage] [decimal](5, 2) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Publisher]    Script Date: 21/04/2024 07:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Publisher](
	[PublisherId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[City] [nvarchar](100) NULL,
	[State] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[PublisherId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 21/04/2024 07:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 21/04/2024 07:38:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](100) NULL,
	[Password] [nvarchar](100) NULL,
	[Source] [nvarchar](100) NULL,
	[FullName] [nvarchar](100) NULL,
	[Role_Id] [int] NULL,
	[Pub_Id] [int] NULL,
	[Hire_Date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Author] ON 

INSERT [dbo].[Author] ([AuthorId], [FullName], [Email], [Phone], [Address], [City], [State], [Zip]) VALUES (1, N'Author 1', N'author1@example.com', N'123456789', N'Address 1', N'City 1', N'State 1', N'Zip 1')
INSERT [dbo].[Author] ([AuthorId], [FullName], [Email], [Phone], [Address], [City], [State], [Zip]) VALUES (2, N'Author 2', N'author2@example.com', N'987654321', N'Address 2', N'City 2', N'State 2', N'Zip 2')
INSERT [dbo].[Author] ([AuthorId], [FullName], [Email], [Phone], [Address], [City], [State], [Zip]) VALUES (3, N'Author 3', N'author3@example.com', N'111222333', N'Address 3', N'City 3', N'State 3', N'Zip 3')
INSERT [dbo].[Author] ([AuthorId], [FullName], [Email], [Phone], [Address], [City], [State], [Zip]) VALUES (4, N'Author 4', N'author4@example.com', N'444555666', N'Address 4', N'City 4', N'State 4', N'Zip 4')
INSERT [dbo].[Author] ([AuthorId], [FullName], [Email], [Phone], [Address], [City], [State], [Zip]) VALUES (5, N'Author 5', N'author5@example.com', N'777888999', N'Address 5', N'City 5', N'State 5', N'Zip 5')
SET IDENTITY_INSERT [dbo].[Author] OFF
GO
SET IDENTITY_INSERT [dbo].[Book] ON 

INSERT [dbo].[Book] ([BookId], [Pub_Id], [Title], [Type], [Price], [Advance], [Royalty], [YtdSale], [Notes], [Published_Date]) VALUES (1, 1, N'Book 1', N'Type 1', CAST(10.99 AS Decimal(10, 2)), CAST(5.00 AS Decimal(10, 2)), CAST(0.25 AS Decimal(5, 2)), 100, N'Notes 1', CAST(N'2024-01-01' AS Date))
INSERT [dbo].[Book] ([BookId], [Pub_Id], [Title], [Type], [Price], [Advance], [Royalty], [YtdSale], [Notes], [Published_Date]) VALUES (2, 2, N'Book 2', N'Type 2', CAST(15.99 AS Decimal(10, 2)), CAST(7.00 AS Decimal(10, 2)), CAST(0.30 AS Decimal(5, 2)), 200, N'Notes 2', CAST(N'2024-01-02' AS Date))
INSERT [dbo].[Book] ([BookId], [Pub_Id], [Title], [Type], [Price], [Advance], [Royalty], [YtdSale], [Notes], [Published_Date]) VALUES (3, 3, N'Book 3', N'Type 3', CAST(20.99 AS Decimal(10, 2)), CAST(10.00 AS Decimal(10, 2)), CAST(0.35 AS Decimal(5, 2)), 300, N'Notes 3', CAST(N'2024-01-03' AS Date))
INSERT [dbo].[Book] ([BookId], [Pub_Id], [Title], [Type], [Price], [Advance], [Royalty], [YtdSale], [Notes], [Published_Date]) VALUES (4, 4, N'Book 4', N'Type 4', CAST(25.99 AS Decimal(10, 2)), CAST(12.00 AS Decimal(10, 2)), CAST(0.40 AS Decimal(5, 2)), 400, N'Notes 4', CAST(N'2024-01-04' AS Date))
INSERT [dbo].[Book] ([BookId], [Pub_Id], [Title], [Type], [Price], [Advance], [Royalty], [YtdSale], [Notes], [Published_Date]) VALUES (5, 5, N'Book 5', N'Type 5', CAST(30.99 AS Decimal(10, 2)), CAST(15.00 AS Decimal(10, 2)), CAST(0.45 AS Decimal(5, 2)), 500, N'Notes 5', CAST(N'2024-01-05' AS Date))
SET IDENTITY_INSERT [dbo].[Book] OFF
GO
INSERT [dbo].[BookAuthor] ([AuthorId], [Book_Id], [Author_Order], [Royality_Percentage]) VALUES (1, 1, 1, CAST(0.10 AS Decimal(5, 2)))
INSERT [dbo].[BookAuthor] ([AuthorId], [Book_Id], [Author_Order], [Royality_Percentage]) VALUES (2, 2, 2, CAST(0.15 AS Decimal(5, 2)))
INSERT [dbo].[BookAuthor] ([AuthorId], [Book_Id], [Author_Order], [Royality_Percentage]) VALUES (3, 3, 3, CAST(0.20 AS Decimal(5, 2)))
INSERT [dbo].[BookAuthor] ([AuthorId], [Book_Id], [Author_Order], [Royality_Percentage]) VALUES (4, 4, 4, CAST(0.25 AS Decimal(5, 2)))
INSERT [dbo].[BookAuthor] ([AuthorId], [Book_Id], [Author_Order], [Royality_Percentage]) VALUES (5, 5, 5, CAST(0.30 AS Decimal(5, 2)))
GO
SET IDENTITY_INSERT [dbo].[Publisher] ON 

INSERT [dbo].[Publisher] ([PublisherId], [Name], [City], [State], [Country]) VALUES (1, N'Publisher A', N'City A', N'State A', N'Country A')
INSERT [dbo].[Publisher] ([PublisherId], [Name], [City], [State], [Country]) VALUES (2, N'Publisher B', N'City B', N'State B', N'Country B')
INSERT [dbo].[Publisher] ([PublisherId], [Name], [City], [State], [Country]) VALUES (3, N'Publisher C', N'City C', N'State C', N'Country C')
INSERT [dbo].[Publisher] ([PublisherId], [Name], [City], [State], [Country]) VALUES (4, N'Publisher D', N'City D', N'State D', N'Country D')
INSERT [dbo].[Publisher] ([PublisherId], [Name], [City], [State], [Country]) VALUES (5, N'Publisher E', N'City E', N'State E', N'Country E')
SET IDENTITY_INSERT [dbo].[Publisher] OFF
GO
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (1, N'Admin')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (2, N'Staff')
SET IDENTITY_INSERT [dbo].[Role] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [Email], [Password], [Source], [FullName], [Role_Id], [Pub_Id], [Hire_Date]) VALUES (2, N'user1@example.com', N'password1', N'Source 1', N'User 1', 1, 1, CAST(N'2024-01-01' AS Date))
INSERT [dbo].[User] ([UserId], [Email], [Password], [Source], [FullName], [Role_Id], [Pub_Id], [Hire_Date]) VALUES (3, N'user2@example.com', N'password2', N'Source 2', N'User 2', 2, 2, CAST(N'2024-01-02' AS Date))
INSERT [dbo].[User] ([UserId], [Email], [Password], [Source], [FullName], [Role_Id], [Pub_Id], [Hire_Date]) VALUES (4, N'user3@example.com', N'password3', N'Source 3', N'User 3', 1, 3, CAST(N'2024-01-03' AS Date))
INSERT [dbo].[User] ([UserId], [Email], [Password], [Source], [FullName], [Role_Id], [Pub_Id], [Hire_Date]) VALUES (5, N'user4@example.com', N'password4', N'Source 4', N'User 4', 2, 4, CAST(N'2024-01-04' AS Date))
INSERT [dbo].[User] ([UserId], [Email], [Password], [Source], [FullName], [Role_Id], [Pub_Id], [Hire_Date]) VALUES (6, N'user5@example.com', N'password5', N'Source 5', N'User 5', 1, 5, CAST(N'2024-01-05' AS Date))
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[Book]  WITH CHECK ADD FOREIGN KEY([Pub_Id])
REFERENCES [dbo].[Publisher] ([PublisherId])
GO
ALTER TABLE [dbo].[BookAuthor]  WITH CHECK ADD FOREIGN KEY([AuthorId])
REFERENCES [dbo].[Author] ([AuthorId])
GO
ALTER TABLE [dbo].[BookAuthor]  WITH CHECK ADD FOREIGN KEY([Book_Id])
REFERENCES [dbo].[Book] ([BookId])
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD FOREIGN KEY([Pub_Id])
REFERENCES [dbo].[Publisher] ([PublisherId])
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD FOREIGN KEY([Role_Id])
REFERENCES [dbo].[Role] ([RoleId])
GO
USE [master]
GO
ALTER DATABASE [BookStore] SET  READ_WRITE 
GO
