using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AirplaneSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace AirplaneSystem.Data
{
    public class AirplanesDbContext : DbContext
    {
        public AirplanesDbContext (DbContextOptions<AirplanesDbContext> options)
            : base(options)
        {
        }

        public override int SaveChanges()
        {
            SetTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            SetTimestamps();
            return base.SaveChangesAsync(cancellationToken);    
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            SetTimestamps();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            SetTimestamps();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }


        private void SetTimestamps()
        {
            var entities = ChangeTracker.Entries().Where(x => x.Entity is Airplane && (x.State == EntityState.Added || x.State == EntityState.Modified));

            foreach (var entity in entities)
            {
                if (entity.State == EntityState.Added)
                {
                    ((Airplane)entity.Entity).Created = DateTime.UtcNow;
                }
                else
                {
                    ((Airplane)entity.Entity).LastUpdate = DateTime.UtcNow;
                }
            }
        }


        public DbSet<Airplane> Airplane { get; set; }
    }
}
