# API application

ASP.NET Core .NET 10 API that references the shared `libraries/common` project.
The API defines its controllers and uses `Common.Managers.CounterManager` for
counter operations.

Run it with:

```sh
dotnet run
```

The counter endpoints are available at `/api/counter`:

```text
GET  /api/counter
POST /api/counter/increment
POST /api/counter/reset
```
