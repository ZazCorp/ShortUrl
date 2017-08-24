using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DataBase;

namespace DataBase.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20170824110225_azure2")]
    partial class azure2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("MyModels.Url", b =>
                {
                    b.Property<string>("IdUrl")
                        .ValueGeneratedOnAdd();

                    b.Property<long>("Count");

                    b.Property<DateTime?>("DateCreate");

                    b.Property<string>("IdUser");

                    b.Property<string>("ShortUrl");

                    b.Property<string>("SourceUrl");

                    b.HasKey("IdUrl");

                    b.ToTable("Urls");
                });
        }
    }
}
