namespace webApi.Services
{
    public class HellowWorldService : IHellowWorldService
    {
        public HellowWorldService() { }

        public string GetHelloWWorld()
        {
            return "Hello World";
        }
    }

    public interface IHellowWorldService
    {
        string GetHelloWWorld();
    }
}
