/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { PendingInterceptorService } from './pending-interceptor.service';

@Injectable({
    providedIn: 'root'
})
export class SpinnerVisibilityService {
    private _visibilitySubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

    constructor(private pendingInterceptorService: PendingInterceptorService) {
    }

    /** @deprecated Deprecated in favor of visibilityObservable$ */
    get visibilityObservable(): Observable<boolean> {
        return this.visibilityObservable$;
    }

    get visibilityObservable$(): Observable<boolean> {
        return this._visibilitySubject.asObservable();
    }

    public show(): void {
        this.pendingInterceptorService.forceByPass = true;
        this._visibilitySubject.next(true);
    }

    public hide(): void {
        this._visibilitySubject.next(false);
        this.pendingInterceptorService.forceByPass = false;
    }
}
