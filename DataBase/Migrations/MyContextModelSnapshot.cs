using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DataBase;

namespace DataBase.Migrations
{
    [DbContext(typeof(MyContext))]
    partial class MyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("MyModels.Url", b =>
                {
                    b.Property<int>("IdUrl")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("IdUser");

                    b.Property<string>("ShortUrl");

                    b.Property<string>("SourceUrl");

                    b.HasKey("IdUrl");

                    b.ToTable("Urls");
                });
        }
    }
}
