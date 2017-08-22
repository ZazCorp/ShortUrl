using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DataBase;

namespace DataBase.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20170822142410_dateCreate")]
    partial class dateCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("MyModels.Url", b =>
                {
                    b.Property<int>("IdUrl")
                        .ValueGeneratedOnAdd();

                    b.Property<long>("Count");

                    b.Property<DateTime?>("DateCreate");

                    b.Property<int>("IdUser");

                    b.Property<string>("ShortUrl");

                    b.Property<string>("SourceUrl");

                    b.HasKey("IdUrl");

                    b.ToTable("Urls");
                });
        }
    }
}
