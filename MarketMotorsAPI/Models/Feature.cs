using System.Collections.Generic;
using System;

namespace MarketMotors.Models
{
  public class Feature
  {
    public int FeatureId { get; set; }
    public int VehicleId { get; set; }
    public virtual Vehicle Vehicle { get; set; }
    public bool PowerWindows {get ; set; }
    public bool PowerLocks { get; set; }
  } 
}