/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgHttpLoaderComponent } from './components/ng-http-loader.component';
import { PendingInterceptorServiceInterceptor } from './services/pending-interceptor.service';
import { SPINKIT_COMPONENTS } from './spinkits';

@NgModule({
    declarations: [
        NgHttpLoaderComponent,
        ...SPINKIT_COMPONENTS,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        NgHttpLoaderComponent,
        ...SPINKIT_COMPONENTS,
    ],
    providers: [
        PendingInterceptorServiceInterceptor,
    ]
})
export class NgHttpLoaderModule {
}
