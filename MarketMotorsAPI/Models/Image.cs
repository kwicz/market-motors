namespace MarketMotors.Models
{
  public class Image
  {
    public int ImageId { get; set; }
    public string ImageTitle { get; set; }
    public byte[] ImageData { get; set; }
    public int VehicleId { get; set; }
    public virtual Vehicle Vehicle { get; set; }
  } 
}