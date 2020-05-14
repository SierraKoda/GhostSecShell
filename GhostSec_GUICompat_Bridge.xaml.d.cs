using System;
using Xamarin.Forms;
namespace GhostSec
{
	public partial class GhostSec_GUICompat_Bridge
	{
		void InitializeComponent()
		{
			Xamarin.Forms.Xaml.Extensions.LoadFromXaml(this, typeof(GhostSec_GUICompat_Bridge));
		}
	}
}
