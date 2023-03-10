CREATE DATABASE CONTACTOS

USE [CONTACTOS]
GO
/****** Object:  Table [dbo].[contactos]    Script Date: 22/02/2023 11:11:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[contactos](
	[codigo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[empresa] [varchar](50) NULL,
	[celular] [varchar](50) NULL,
	[correo] [varchar](50) NULL,
 CONSTRAINT [PK_contactos] PRIMARY KEY CLUSTERED 
(
	[codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[insertdatos]    Script Date: 22/02/2023 11:11:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[insertdatos]
@codigo int,
@nombre varchar(50),
@empresa varchar(50),
@celular varchar(50),
@correo varchar(50)

as
begin
	insert into contactos
	(nombre,empresa,celular,correo)
	values
	(@nombre,@empresa,@celular,@correo)
	select * from contactos
end
GO
