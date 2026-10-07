var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSingleton<Template.Core.Managers.CounterManager>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("DevelopmentClients", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseCors("DevelopmentClients");
}

app.UseAuthorization();

app.MapControllers();

app.Run();
