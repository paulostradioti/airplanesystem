using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AirplaneSystem.Data
{
    public class AirplanesDbContextFactory : IDesignTimeDbContextFactory<AirplanesDbContext>
    {
        public AirplanesDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AirplanesDbContext>();
            optionsBuilder.UseSqlite(ConnectionString);

            return new AirplanesDbContext(optionsBuilder.Options);
        }

        private static string _conectionString;
        public static string ConnectionString
        {
            get
            {
                var dbPath = Path.Combine(Path.GetTempPath(), "Airplanes.db");
                return $"Data Source={dbPath};";
            }
            private set { _conectionString = value; }
        }

    }
}
