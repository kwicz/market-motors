﻿// <auto-generated />
using MarketMotors.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MarketMotors.Migrations
{
    [DbContext(typeof(MarketMotorsContext))]
    [Migration("20200519231917_AddFeatured")]
    partial class AddFeatured
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("MarketMotors.Models.Feature", b =>
                {
                    b.Property<int>("FeatureId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("PowerLocks");

                    b.Property<bool>("PowerWindows");

                    b.Property<int>("VehicleId");

                    b.HasKey("FeatureId");

                    b.HasIndex("VehicleId");

                    b.ToTable("Features");
                });

            modelBuilder.Entity("MarketMotors.Models.Vehicle", b =>
                {
                    b.Property<int>("VehicleId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Availability");

                    b.Property<string>("Condition");

                    b.Property<string>("Doors");

                    b.Property<string>("Engine");

                    b.Property<string>("ExteriorColor");

                    b.Property<string>("Featured");

                    b.Property<string>("FuelType");

                    b.Property<string>("InteriorColor");

                    b.Property<string>("Make");

                    b.Property<string>("Mileage");

                    b.Property<string>("Model");

                    b.Property<string>("Price");

                    b.Property<string>("StockNumber")
                        .HasMaxLength(4);

                    b.Property<string>("Transmission");

                    b.Property<string>("VehicleTitle");

                    b.Property<string>("Vin");

                    b.Property<string>("Year");

                    b.HasKey("VehicleId");

                    b.ToTable("Vehicles");
                });

            modelBuilder.Entity("MarketMotors.Models.Feature", b =>
                {
                    b.HasOne("MarketMotors.Models.Vehicle", "Vehicle")
                        .WithMany("Features")
                        .HasForeignKey("VehicleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}