using Api_Productos.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_Productos.Db_Context
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

        public DbSet<Usuario> Usuarios { get; set; }
    }
}
